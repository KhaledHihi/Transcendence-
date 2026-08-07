import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./dto/user-response.dto").UserResponseDto>;
    findOne(id: number): Promise<import("./dto/user-response.dto").UserResponseDto>;
}
