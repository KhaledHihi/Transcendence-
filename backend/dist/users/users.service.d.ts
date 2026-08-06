import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
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
