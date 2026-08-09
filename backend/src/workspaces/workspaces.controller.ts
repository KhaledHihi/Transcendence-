import {
    Get,
    Param,
    ParseIntPipe,
    Body,
    Controller,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import type { AuthRequest } from '../auth/types/auth-request.type';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(
    private readonly workspacesService: WorkspacesService,
  ) {}

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

    @Get()
    @UseGuards(JwtAuthGuard)
    findMine(
    @Req() request: AuthRequest,
    ) {
    return this.workspacesService.findMine(
        request.user!.sub,
    );
    }

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
}