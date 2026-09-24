import { User } from '../../users/entities/user.entity';
export declare class Workspace {
    id: string;
    ownerId: string;
    owner: User;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    archivedAt: Date | null;
    deletedAt: Date | null;
}
