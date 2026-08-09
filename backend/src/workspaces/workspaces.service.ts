import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

import { Workspace } from './entities/workspace.entity';
import { WorkspaceMembership, WorkspaceRole } from './entities/workspace-membership.entity';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
        private readonly workspacesRepository: Repository<Workspace>,
    @InjectRepository(WorkspaceMembership)
        private readonly membershipsRepository: Repository<WorkspaceMembership>,

        private readonly dataSource: DataSource,
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
}