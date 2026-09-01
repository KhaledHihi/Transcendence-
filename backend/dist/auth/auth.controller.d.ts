import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { AuthRequest } from './types/auth-request.type';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("../users/dto/user-response.dto").UserResponseDto>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    getProfile(request: AuthRequest): import("./types/jwt-payload.type").JwtPayload | undefined;
    adminTest(): {
        allowed: boolean;
    };
}
