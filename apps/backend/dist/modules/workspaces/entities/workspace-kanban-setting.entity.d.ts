import { Workspace } from './workspace.entity';
export declare class WorkspaceKanbanSetting {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    activeWipLimit: number;
    definitionOfReady: unknown | null;
    definitionOfDone: unknown | null;
    createdAt: Date;
    updatedAt: Date;
}
