import { User } from '../../users/entities/user.entity';
export declare class Workspace {
    id: number;
    name: string;
    description: string | null;
    ownerId: number;
    owner: User;
    createdAt: Date;
    updatedAt: Date;
}
