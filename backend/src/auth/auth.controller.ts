// src/auth/auth.controller.ts

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ResponseMessage } from '../common/decorators/response-message.decorator';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import type { AuthRequest } from './types/auth-request.type';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @ResponseMessage('Registration successful')
  @Post('register')
  register(
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @ResponseMessage('Login successful')
  @Post('login')
  login(
    @Body() loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  @ResponseMessage('Profile fetched successfully')
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(
    @Req() request: AuthRequest,
  ) {
    return request.user;
  }

  @ResponseMessage('Admin access granted')
  @Get('admin-test')
  @UseGuards(JwtAuthGuard, RolesGuard)
  adminTest() {
    return {
      allowed: true,
    };
  }
}