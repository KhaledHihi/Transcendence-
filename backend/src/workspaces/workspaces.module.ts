import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Workspace } from './entities/workspace.entity';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';
import { AuthModule } from '../auth/auth.module';
import { WorkspaceMembership } from './entities/workspace-membership.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workspace, WorkspaceMembership]),
    AuthModule,
  ],
  providers: [WorkspacesService],
  controllers: [WorkspacesController],
})
export class WorkspacesModule {}