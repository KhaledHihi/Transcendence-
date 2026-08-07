import * as argon2 from 'argon2';
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmailForAuth(
      loginDto.email,
    );

    if (!user) {
        throw new UnauthorizedException(
            'Invalid credentials',
        );
        }
    const passwordValid = await argon2.verify(
        user.passwordHash,
        loginDto.password,
    );
    if (!passwordValid) {
        throw new UnauthorizedException(
            'Invalid credentials',
        );
        }

        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role,
        };

            const accessToken = await this.jwtService.signAsync(payload);

            return {
                accessToken,
        }; 
  }
}