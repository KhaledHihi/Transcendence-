import { User } from '../entities/user.entity';
import { UserResponseDto } from '../dto/user-response.dto';
export declare class UserMapper {
    static toResponse(user: User): UserResponseDto;
}
