import { User } from '../../users/entities/user.entity';
export declare class GitHubAccount {
    id: string;
    userId: string;
    user: User;
    githubUserId: string;
    githubLogin: string;
    avatarUrl: string | null;
    profileUrl: string | null;
    connectedAt: Date;
    updatedAt: Date;
}
