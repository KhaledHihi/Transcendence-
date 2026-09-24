import type { Request } from 'express';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UserResponseDto } from '../../users/dto/user-response.dto';
import { LoginDto } from '../dto/login.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { AuthService } from '../services/auth.service';
type AuthenticatedRequest = Request & {
    user: UserResponseDto;
};
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: CreateUserDto): Promise<UserResponseDto>;
    login(dto: LoginDto): Promise<LoginResponseDto>;
    getProfile(request: AuthenticatedRequest): UserResponseDto;
}
export {};
