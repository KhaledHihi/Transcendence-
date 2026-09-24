import { Repository } from './repository.entity';
import { User } from '../../users/entities/user.entity';
export declare class RepositoryCommit {
    id: string;
    repositoryId: string;
    repository: Repository;
    sha: string;
    message: string;
    authorGithubUserId: string | null;
    authorName: string | null;
    committerName: string | null;
    matchedUserId: string | null;
    matchedUser: User | null;
    committedAt: Date;
    githubUrl: string | null;
    createdAt: Date;
}
