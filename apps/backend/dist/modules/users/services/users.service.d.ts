import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { User } from '../entities/user.entity';
import { UpdateProfileDto } from '../dto/update-profile.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findById(id: string): Promise<UserResponseDto>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    create(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    updateProfile(id: string, dto: UpdateProfileDto): Promise<UserResponseDto>;
}
