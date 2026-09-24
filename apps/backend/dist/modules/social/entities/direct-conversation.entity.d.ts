import { User } from '../../users/entities/user.entity';
export declare class DirectConversation {
    id: string;
    userAId: string;
    userA: User;
    userBId: string;
    userB: User;
    userALastReadAt: Date | null;
    userBLastReadAt: Date | null;
    lastMessageAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
