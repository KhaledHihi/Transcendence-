// src/workspaces/workspaces.controller.ts

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { AuthRequest } from '../auth/types/auth-request.type';
import { ResponseMessage } from '../common/decorators/response-message.decorator';

import { AddMemberDto } from './dto/add-member.dto';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { TransferOwnershipDto } from './dto/transfer-ownership.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(
    private readonly workspacesService: WorkspacesService,
  ) {}

  @ResponseMessage('Workspace created successfully')
  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createWorkspaceDto: CreateWorkspaceDto,
    @Req() request: AuthRequest,
  ) {
    return this.workspacesService.create(
      createWorkspaceDto,
      request.user!.sub,
    );
  }

  @ResponseMessage('Workspaces fetched successfully')
  @Get()
  @UseGuards(JwtAuthGuard)
  findMine(
    @Req() request: AuthRequest,
  ) {
    return this.workspacesService.findMine(
      request.user!.sub,
    );
  }

  @ResponseMessage('Workspace fetched successfully')
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() request: AuthRequest,
  ) {
    return this.workspacesService.findOneForMember(
      id,
      request.user!.sub,
    );
  }

  @ResponseMessage('Member added successfully')
  @Post(':workspaceId/members')
  @UseGuards(JwtAuthGuard)
  addMember(
    @Param('workspaceId', ParseIntPipe)
    workspaceId: number,

    @Body()
    addMemberDto: AddMemberDto,

    @Req()
    request: AuthRequest,
  ) {
    return this.workspacesService.addMember(
      workspaceId,
      request.user!.sub,
      addMemberDto,
    );
  }

  @ResponseMessage('Member removed successfully')
  @Delete(':workspaceId/members/:userId')
  @UseGuards(JwtAuthGuard)
  removeMember(
    @Param('workspaceId', ParseIntPipe)
    workspaceId: number,

    @Param('userId', ParseIntPipe)
    userId: number,

    @Req()
    request: AuthRequest,
  ) {
    return this.workspacesService.removeMember(
      workspaceId,
      request.user!.sub,
      userId,
    );
  }

  @ResponseMessage('Workspace ownership transferred successfully')
  @Patch(':workspaceId/owner')
  @UseGuards(JwtAuthGuard)
  transferOwnership(
    @Param('workspaceId', ParseIntPipe)
    workspaceId: number,

    @Body()
    transferOwnershipDto: TransferOwnershipDto,

    @Req()
    request: AuthRequest,
  ) {
    return this.workspacesService.transferOwnership(
      workspaceId,
      request.user!.sub,
      transferOwnershipDto,
    );
  }

  @ResponseMessage('Workspace left successfully')
  @Delete(':workspaceId/leave')
  @UseGuards(JwtAuthGuard)
  leaveWorkspace(
    @Param('workspaceId', ParseIntPipe)
    workspaceId: number,

    @Req()
    request: AuthRequest,
  ) {
    return this.workspacesService.leaveWorkspace(
      workspaceId,
      request.user!.sub,
    );
  }

  @ResponseMessage('Workspace updated successfully')
  @Patch(':workspaceId')
  @UseGuards(JwtAuthGuard)
  updateWorkspace(
    @Param('workspaceId', ParseIntPipe)
    workspaceId: number,

    @Body()
    updateWorkspaceDto: UpdateWorkspaceDto,

    @Req()
    request: AuthRequest,
  ) {
    return this.workspacesService.updateWorkspace(
      workspaceId,
      request.user!.sub,
      updateWorkspaceDto,
    );
  }

  @ResponseMessage('Workspace deleted successfully')
  @Delete(':workspaceId')
  @UseGuards(JwtAuthGuard)
  deleteWorkspace(
    @Param('workspaceId', ParseIntPipe)
    workspaceId: number,

    @Req()
    request: AuthRequest,
  ) {
    return this.workspacesService.deleteWorkspace(
      workspaceId,
      request.user!.sub,
    );
  }
}