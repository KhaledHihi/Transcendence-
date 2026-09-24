import { Task } from './task.entity';
import { User } from '../../users/entities/user.entity';
export declare class TaskAssignment {
    id: string;
    taskId: string;
    task: Task;
    userId: string;
    user: User;
    assignedById: string | null;
    assignedBy: User | null;
    assignedAt: Date;
}
