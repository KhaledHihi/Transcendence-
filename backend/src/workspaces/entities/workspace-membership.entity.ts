import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { Workspace } from './workspace.entity';

export enum WorkspaceRole {
  OWNER = 'owner',
  MEMBER = 'member',
}

@Entity('workspace_memberships')
@Unique(['workspaceId', 'userId'])
export class WorkspaceMembership {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: 'workspace_id',
    type: 'int',
  })
  workspaceId!: number;

  @Column({
    name: 'user_id',
    type: 'int',
  })
  userId!: number;

  @Column({
    type: 'enum',
    enum: WorkspaceRole,
    default: WorkspaceRole.MEMBER,
  })
  role!: WorkspaceRole;

  @ManyToOne(() => Workspace, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'workspace_id',
  })
  workspace!: Workspace;

  @ManyToOne(() => User, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
  })
  user!: User;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}