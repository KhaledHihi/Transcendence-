import type { AuthRequest } from '../auth/types/auth-request.type';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { WorkspacesService } from './workspaces.service';
export declare class WorkspacesController {
    private readonly workspacesService;
    constructor(workspacesService: WorkspacesService);
    create(createWorkspaceDto: CreateWorkspaceDto, request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace>;
    findMine(request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace[]>;
    findOne(id: number, request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace>;
}
