import { Task } from './task.entity';
import { User } from '../../users/entities/user.entity';
export declare class TaskDependency {
    id: string;
    taskId: string;
    task: Task;
    dependsOnTaskId: string;
    dependsOnTask: Task;
    createdById: string | null;
    createdBy: User | null;
    createdAt: Date;
}
