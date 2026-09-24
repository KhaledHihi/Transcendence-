import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class Note {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    creatorId: string | null;
    creator: User | null;
    title: string;
    content: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
