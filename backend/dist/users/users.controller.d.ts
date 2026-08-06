import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        avatarUrl: string | null;
        role: import("./entities/user.entity").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
