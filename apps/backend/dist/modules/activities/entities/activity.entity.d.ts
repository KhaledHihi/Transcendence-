import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class Activity {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    actorUserId: string | null;
    actorUser: User | null;
    actionType: string;
    resourceType: string | null;
    resourceId: string | null;
    metadata: unknown | null;
    createdAt: Date;
}
