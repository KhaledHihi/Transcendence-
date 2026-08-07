import { UserRole } from '../entities/user.entity';
export declare class UserResponseDto {
    id: number;
    username: string;
    email: string;
    avatarUrl: string | null;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
