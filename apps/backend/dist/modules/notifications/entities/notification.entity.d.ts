import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class Notification {
    id: string;
    userId: string;
    user: User;
    workspaceId: string | null;
    workspace: Workspace | null;
    type: string;
    message: string;
    relatedResourceType: string | null;
    relatedResourceId: string | null;
    payload: unknown | null;
    createdAt: Date;
    readAt: Date | null;
}
