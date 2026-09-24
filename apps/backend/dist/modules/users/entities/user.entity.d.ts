import { AppRole, UserStatus } from '../../../database/enums/database.enums';
export declare class User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    avatarUrl: string | null;
    appRole: AppRole;
    status: UserStatus;
    lastSeenAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
