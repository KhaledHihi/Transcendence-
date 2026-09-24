import { InvitationStatus } from '../../../database/enums/database.enums';
import { User } from '../../users/entities/user.entity';
import { Workspace } from './workspace.entity';
export declare class WorkspaceInvitation {
    id: string;
    workspaceId: string;
    workspace: Workspace;
    invitedById: string | null;
    invitedBy: User | null;
    invitedUserId: string | null;
    invitedUser: User | null;
    invitedEmail: string | null;
    status: InvitationStatus;
    tokenHash: string | null;
    expiresAt: Date | null;
    respondedAt: Date | null;
    createdAt: Date;
}
