import type { Request } from 'express';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { UsersService } from '../services/users.service';
type AuthenticatedRequest = Request & {
    user: UserResponseDto;
};
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(id: string, request: AuthenticatedRequest): Promise<UserResponseDto>;
    updateProfile(id: string, dto: UpdateProfileDto, request: AuthenticatedRequest): Promise<UserResponseDto>;
}
export {};
