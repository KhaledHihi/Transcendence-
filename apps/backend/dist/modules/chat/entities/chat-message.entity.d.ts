import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class ChatMessage {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    senderId: string | null;
    sender: User | null;
    content: string;
    createdAt: Date;
    editedAt: Date | null;
    deletedAt: Date | null;
}
