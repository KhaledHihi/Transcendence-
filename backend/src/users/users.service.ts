import { UserMapper } from './mappers/user.mapper';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { isDuplicateError } from '../common/errors/database-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  
  // Find user by email for authentication purposes, including the password hash
  async findByEmailForAuth(email: string): Promise<User | null> {
    return this.usersRepository
      .createQueryBuilder('user')
      .addSelect('user.passwordHash')
      .where('user.email = :email', { email })
      .getOne();
  }
  //handling 2 requests at the same time, we need to check manually if the username or email already exists before saving to the database
  async findOneById(id: number): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    return UserMapper.toResponse(user);
  }

  async create(createUserDto: CreateUserDto) {

    // 1. Check manually
    const existingUser = await this.usersRepository.findOne({
      where: [
        { username: createUserDto.username },
        { email: createUserDto.email },
      ],
    });

    if (existingUser) {
      throw new ConflictException(
        'Username or email already exists',
      );
    }


    // 2. Hash password
    const passwordHash = await argon2.hash(
      createUserDto.password,
    );


    // 3. Create entity
    const user = this.usersRepository.create({
      username: createUserDto.username,
      email: createUserDto.email,
      passwordHash,
    });


    // 4. Save to database safely
    try {
      const savedUser = await this.usersRepository.save(user);

      return UserMapper.toResponse(savedUser);

    } catch (error) {

      if (isDuplicateError(error)) {
        throw new ConflictException(
          'Username or email already exists',
        );
      }

      throw error;
    }
  }
}