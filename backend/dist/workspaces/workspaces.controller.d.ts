import type { AuthRequest } from '../auth/types/auth-request.type';
import { AddMemberDto } from './dto/add-member.dto';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { TransferOwnershipDto } from './dto/transfer-ownership.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { WorkspacesService } from './workspaces.service';
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
    transferOwnership(workspaceId: number, transferOwnershipDto: TransferOwnershipDto, request: AuthRequest): Promise<{
        message: string;
    }>;
    leaveWorkspace(workspaceId: number, request: AuthRequest): Promise<{
        message: string;
    }>;
    updateWorkspace(workspaceId: number, updateWorkspaceDto: UpdateWorkspaceDto, request: AuthRequest): Promise<import("./entities/workspace.entity").Workspace>;
    deleteWorkspace(workspaceId: number, request: AuthRequest): Promise<{
        message: string;
    }>;
}
