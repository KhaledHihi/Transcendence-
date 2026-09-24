import { AppRole, UserStatus } from '../../../database/enums/database.enums';
export declare class UserResponseDto {
    id: string;
    username: string;
    email: string;
    avatarUrl: string | null;
    appRole: AppRole;
    status: UserStatus;
    createdAt: Date;
    updatedAt: Date;
}
