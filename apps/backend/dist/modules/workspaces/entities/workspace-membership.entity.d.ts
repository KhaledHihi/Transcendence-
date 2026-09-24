import { User } from '../../users/entities/user.entity';
import { Workspace } from './workspace.entity';
export declare class WorkspaceMembership {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    userId: string;
    user: User;
    joinedAt: Date;
}
