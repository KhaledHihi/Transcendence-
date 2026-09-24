import { TaskPriority, TaskStatus } from '../../../database/enums/database.enums';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class Task {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    creatorId: string | null;
    creator: User | null;
    title: string;
    description: string | null;
    acceptanceCriteria: string | null;
    status: TaskStatus;
    priority: TaskPriority | null;
    position: number;
    isBlocked: boolean;
    blockedReason: string | null;
    blockedAt: Date | null;
    dueAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    completedAt: Date | null;
    cancelledAt: Date | null;
    deletedAt: Date | null;
}
