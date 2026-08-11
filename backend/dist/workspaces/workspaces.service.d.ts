import { DataSource, Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UsersService } from '../users/users.service';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceMembership } from './entities/workspace-membership.entity';
import { AddMemberDto } from './dto/add-member.dto';
export declare class WorkspacesService {
    private readonly workspacesRepository;
    private readonly membershipsRepository;
    private readonly dataSource;
    private readonly usersService;
    constructor(workspacesRepository: Repository<Workspace>, membershipsRepository: Repository<WorkspaceMembership>, dataSource: DataSource, usersService: UsersService);
    create(createWorkspaceDto: CreateWorkspaceDto, ownerId: number): Promise<Workspace>;
    findMine(userId: number): Promise<Workspace[]>;
    findOneForMember(id: number, userId: number): Promise<Workspace>;
    findWorkspaceOrThrow(id: number): Promise<Workspace>;
    addMember(workspaceId: number, requesterId: number, addMemberDto: AddMemberDto): Promise<WorkspaceMembership>;
    removeMember(workspaceId: number, requesterId: number, targetUserId: number): Promise<{
        message: string;
    }>;
}
