import { DirectConversation } from './direct-conversation.entity';
import { User } from '../../users/entities/user.entity';
export declare class DirectMessage {
    id: string;
    conversationId: string;
    conversation: DirectConversation;
    senderId: string;
    sender: User;
    content: string;
    createdAt: Date;
    editedAt: Date | null;
    deletedAt: Date | null;
}
