import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UserResponseDto } from '../../users/dto/user-response.dto';
import { User } from '../../users/entities/user.entity';
import { UsersService } from '../../users/services/users.service';
import { LoginDto } from '../dto/login.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: CreateUserDto): Promise<UserResponseDto>;
    validateCredentials(dto: LoginDto): Promise<User>;
    login(dto: LoginDto): Promise<LoginResponseDto>;
}
