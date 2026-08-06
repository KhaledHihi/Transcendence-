import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

    async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: [
        { username: createUserDto.username },
        { email: createUserDto.email },
      ],
    });

    if (existingUser) {
      throw new ConflictException(
        'A user with this username or email already exists',
      );
    }

    const passwordHash = await argon2.hash(createUserDto.password);

    const user = this.usersRepository.create({
      username: createUserDto.username,
      email: createUserDto.email,
      passwordHash,
    });

    const savedUser = await this.usersRepository.save(user);

    const { passwordHash: _passwordHash, ...safeUser } = savedUser;

    return safeUser;
  }
}