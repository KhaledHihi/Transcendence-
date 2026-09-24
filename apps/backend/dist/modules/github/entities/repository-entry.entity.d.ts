import { RepositoryEntryType } from '../../../database/enums/database.enums';
import { Repository } from './repository.entity';
export declare class RepositoryEntry {
    id: string;
    repositoryId: string;
    repository: Repository;
    branchName: string;
    path: string;
    pathHash: string;
    parentPath: string | null;
    name: string;
    entryType: RepositoryEntryType;
    objectSha: string | null;
    sizeBytes: string | null;
    lastSyncedAt: Date;
}
