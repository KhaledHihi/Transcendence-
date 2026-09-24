import { TaskStatus } from '../../../database/enums/database.enums';
import { Task } from './task.entity';
import { User } from '../../users/entities/user.entity';
export declare class TaskStatusHistory {
    id: string;
    taskId: string;
    task: Task;
    fromStatus: TaskStatus | null;
    toStatus: TaskStatus;
    changedById: string | null;
    changedBy: User | null;
    changedAt: Date;
    note: string | null;
}
