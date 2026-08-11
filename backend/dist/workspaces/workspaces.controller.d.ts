import type { AuthRequest } from '../auth/types/auth-request.type';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { WorkspacesService } from './workspaces.service';
import { AddMemberDto } from './dto/add-member.dto';
export declare class WorkspacesController {
    private readonly workspacesService;
    constructor(workspacesService: WorkspacesService);
    create(createWorkspaceDto: CreateWorkspaceDto, request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace>;
    findMine(request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace[]>;
    findOne(id: number, request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace>;
    addMember(workspaceId: number, addMemberDto: AddMemberDto, request: AuthRequest): Promise<import("./entities/workspace-membership.entity").WorkspaceMembership>;
    removeMember(workspaceId: number, userId: number, request: AuthRequest): Promise<{
        message: string;
    }>;
}
