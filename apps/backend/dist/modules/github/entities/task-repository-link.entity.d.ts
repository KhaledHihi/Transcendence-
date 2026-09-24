import { TaskRepositoryLinkType } from '../../../database/enums/database.enums';
import { Repository } from './repository.entity';
import { Task } from '../../tasks/entities/task.entity';
import { User } from '../../users/entities/user.entity';
export declare class TaskRepositoryLink {
    id: string;
    taskId: string;
    task: Task;
    repositoryId: string;
    repository: Repository;
    linkType: TaskRepositoryLinkType;
    branchName: string | null;
    filePath: string | null;
    commitSha: string | null;
    createdById: string | null;
    createdBy: User | null;
    createdAt: Date;
}
