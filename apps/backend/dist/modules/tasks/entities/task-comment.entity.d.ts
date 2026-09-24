import { Task } from './task.entity';
import { User } from '../../users/entities/user.entity';
export declare class TaskComment {
    id: string;
    taskId: string;
    task: Task;
    authorId: string | null;
    author: User | null;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    editedAt: Date | null;
    deletedAt: Date | null;
}
