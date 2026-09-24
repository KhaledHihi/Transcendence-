import { FriendshipStatus } from '../../../database/enums/database.enums';
import { User } from '../../users/entities/user.entity';
export declare class Friendship {
    id: string;
    userAId: string;
    userA: User;
    userBId: string;
    userB: User;
    requestedById: string;
    requestedBy: User;
    status: FriendshipStatus;
    requestedAt: Date;
    respondedAt: Date | null;
}
