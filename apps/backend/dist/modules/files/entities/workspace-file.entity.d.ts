import { Task } from '../../tasks/entities/task.entity';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
export declare class WorkspaceFile {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    uploaderId: string | null;
    uploader: User | null;
    taskId: string | null;
    task: Task | null;
    originalName: string;
    displayName: string;
    storageKey: string;
    mimeType: string | null;
    sizeBytes: string;
    createdAt: Date;
    deletedAt: Date | null;
}
