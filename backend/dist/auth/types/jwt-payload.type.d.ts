import type { UserRole } from '../../users/entities/user.entity';
export interface JwtPayload {
    sub: number;
    username: string;
    role: UserRole;
    iat?: number;
    exp?: number;
}
