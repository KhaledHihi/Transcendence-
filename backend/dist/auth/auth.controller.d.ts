import type { AuthRequest } from './types/auth-request.type';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    getProfile(request: AuthRequest): import("./types/jwt-payload.type").JwtPayload | undefined;
    adminTest(): {
        message: string;
    };
}
