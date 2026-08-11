import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UsersService } from '../users/users.service';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceMembership, WorkspaceRole } from './entities/workspace-membership.entity';
import { AddMemberDto } from './dto/add-member.dto';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
        private readonly workspacesRepository: Repository<Workspace>,
    @InjectRepository(WorkspaceMembership)
        private readonly membershipsRepository: Repository<WorkspaceMembership>,

        private readonly dataSource: DataSource,

        private readonly usersService: UsersService,
  ) {}

    async create(
        createWorkspaceDto: CreateWorkspaceDto,
        ownerId: number,
    ): Promise<Workspace> {
    return this.dataSource.transaction(async (manager) => {
        const workspace = manager.create(Workspace, {
        name: createWorkspaceDto.name,
        description: createWorkspaceDto.description ?? null,
        ownerId,
        });

        const savedWorkspace = await manager.save(workspace);

        const membership = manager.create(WorkspaceMembership, {
        workspaceId: savedWorkspace.id,
        userId: ownerId,
        role: WorkspaceRole.OWNER,
        });

        await manager.save(membership);

        return savedWorkspace;
    });
    }

    async findMine(userId: number): Promise<Workspace[]> {
        const memberships = await this.membershipsRepository.find({
        where: { userId },
        relations: {
        workspace: true,
        },
    });

        return memberships.map((membership) => membership.workspace);
    }

    async findOneForMember(
        id: number,
        userId: number,
    ): Promise<Workspace> {
    const membership = await this.membershipsRepository.findOne({
        where: {
        workspaceId: id,
        userId,
        },
        relations: {
        workspace: true,
        },
    });

    if (!membership) {
        throw new NotFoundException(
        'Workspace not found',
        );
    }

    return membership.workspace;
    }

    async findWorkspaceOrThrow(
    id: number,
    ): Promise<Workspace> {
    const workspace = await this.workspacesRepository.findOne({
        where: { id },
    });

    if (!workspace) {
        throw new NotFoundException(
        'Workspace not found',
        );
    }

    return workspace;
    }

    async addMember(
    workspaceId: number,
    requesterId: number,
    addMemberDto: AddMemberDto,
    ): Promise<WorkspaceMembership> {
    const workspace =
        await this.findWorkspaceOrThrow(workspaceId);

    if (workspace.ownerId !== requesterId) {
        throw new ForbiddenException(
        'Only the workspace owner can add members',
        );
    }

    await this.usersService.findOneById(
        addMemberDto.userId,
    );

    const existingMembership =
        await this.membershipsRepository.findOne({
        where: {
            workspaceId,
            userId: addMemberDto.userId,
        },
        });

    if (existingMembership) {
        throw new ConflictException(
        'User is already a member of this workspace',
        );
    }

    const membership =
        this.membershipsRepository.create({
        workspaceId,
        userId: addMemberDto.userId,
        role: WorkspaceRole.MEMBER,
        });

    return this.membershipsRepository.save(
        membership,
    );
    }

    async removeMember(
    workspaceId: number,
    requesterId: number,
    targetUserId: number,
    ): Promise<{ message: string }> {
    const workspace =
        await this.findWorkspaceOrThrow(workspaceId);

    if (workspace.ownerId !== requesterId) {
        throw new ForbiddenException(
        'Only the workspace owner can remove members',
        );
    }

    await this.usersService.findOneById(targetUserId);

    const membership =
        await this.membershipsRepository.findOne({
        where: {
            workspaceId,
            userId: targetUserId,
        },
        });

    if (!membership) {
        throw new NotFoundException(
        'Workspace membership not found',
        );
    }

    if (membership.role === WorkspaceRole.OWNER) {
        throw new ForbiddenException(
        'An owner cannot be removed from the workspace',
        );
    }

    await this.membershipsRepository.remove(membership);
    return {
        message: 'Member removed successfully',
    };
    }
}