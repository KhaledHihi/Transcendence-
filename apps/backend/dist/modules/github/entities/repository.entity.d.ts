import { RepositoryVisibility } from '../../../database/enums/database.enums';
import { GitHubInstallation } from './github-installation.entity';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class Repository {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    installationId: string | null;
    installation: GitHubInstallation | null;
    connectedById: string | null;
    connectedBy: User | null;
    githubRepositoryId: string;
    ownerLogin: string;
    name: string;
    fullName: string;
    repositoryUrl: string;
    defaultBranch: string;
    visibility: RepositoryVisibility;
    lastSyncedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    disconnectedAt: Date | null;
}
