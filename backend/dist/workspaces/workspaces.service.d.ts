import { DataSource, Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceMembership } from './entities/workspace-membership.entity';
export declare class WorkspacesService {
    private readonly workspacesRepository;
    private readonly membershipsRepository;
    private readonly dataSource;
    constructor(workspacesRepository: Repository<Workspace>, membershipsRepository: Repository<WorkspaceMembership>, dataSource: DataSource);
    create(createWorkspaceDto: CreateWorkspaceDto, ownerId: number): Promise<Workspace>;
    findMine(userId: number): Promise<Workspace[]>;
    findOneForMember(id: number, userId: number): Promise<Workspace>;
}
