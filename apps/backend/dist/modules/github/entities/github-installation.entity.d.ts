import { GitHubAccountType, GitHubInstallationStatus } from '../../../database/enums/database.enums';
import { User } from '../../users/entities/user.entity';
export declare class GitHubInstallation {
    id: string;
    githubInstallationId: string;
    connectedById: string | null;
    connectedBy: User | null;
    targetGithubId: string;
    targetLogin: string;
    targetType: GitHubAccountType;
    status: GitHubInstallationStatus;
    createdAt: Date;
    updatedAt: Date;
}
