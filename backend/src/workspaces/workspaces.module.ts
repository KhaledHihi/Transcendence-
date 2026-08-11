import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Workspace } from './entities/workspace.entity';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';
import { AuthModule } from '../auth/auth.module';
import { WorkspaceMembership } from './entities/workspace-membership.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workspace, WorkspaceMembership]),
    AuthModule,
    UsersModule,
  ],
  providers: [WorkspacesService],
  controllers: [WorkspacesController],
})
export class WorkspacesModule {}