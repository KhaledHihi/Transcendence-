import { User } from '../../users/entities/user.entity';
import { Workspace } from './workspace.entity';
export declare enum WorkspaceRole {
    OWNER = "owner",
    MEMBER = "member"
}
export declare class WorkspaceMembership {
    id: number;
    workspaceId: number;
    userId: number;
    role: WorkspaceRole;
    workspace: Workspace;
    user: User;
    createdAt: Date;
}
