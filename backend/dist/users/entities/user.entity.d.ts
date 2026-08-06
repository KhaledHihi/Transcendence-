export declare enum UserRole {
    USER = "user",
    ADMIN = "admin"
}
export declare class User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    avatarUrl: string | null;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
