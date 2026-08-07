import { UserResponseDto } from '../dto/user-response.dto';
import { User } from '../entities/user.entity';
export declare class UserMapper {
    static toResponse(user: User): UserResponseDto;
}
