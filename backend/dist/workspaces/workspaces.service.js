"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const workspace_entity_1 = require("./entities/workspace.entity");
const workspace_membership_entity_1 = require("./entities/workspace-membership.entity");
const common_2 = require("@nestjs/common");
let WorkspacesService = class WorkspacesService {
    workspacesRepository;
    membershipsRepository;
    dataSource;
    usersService;
    constructor(workspacesRepository, membershipsRepository, dataSource, usersService) {
        this.workspacesRepository = workspacesRepository;
        this.membershipsRepository = membershipsRepository;
        this.dataSource = dataSource;
        this.usersService = usersService;
    }
    async create(createWorkspaceDto, ownerId) {
        return this.dataSource.transaction(async (manager) => {
            const workspace = manager.create(workspace_entity_1.Workspace, {
                name: createWorkspaceDto.name,
                description: createWorkspaceDto.description ?? null,
                ownerId,
            });
            const savedWorkspace = await manager.save(workspace);
            const membership = manager.create(workspace_membership_entity_1.WorkspaceMembership, {
                workspaceId: savedWorkspace.id,
                userId: ownerId,
                role: workspace_membership_entity_1.WorkspaceRole.OWNER,
            });
            await manager.save(membership);
            return savedWorkspace;
        });
    }
    async findMine(userId) {
        const memberships = await this.membershipsRepository.find({
            where: { userId },
            relations: {
                workspace: true,
            },
        });
        return memberships.map((membership) => membership.workspace);
    }
    async findOneForMember(id, userId) {
        const membership = await this.membershipsRepository.findOne({
            where: {
                workspaceId: id,
                userId,
            },
            relations: {
                workspace: true,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('Workspace not found');
        }
        return membership.workspace;
    }
    async findWorkspaceOrThrow(id) {
        const workspace = await this.workspacesRepository.findOne({
            where: { id },
        });
        if (!workspace) {
            throw new common_1.NotFoundException('Workspace not found');
        }
        return workspace;
    }
    async addMember(workspaceId, requesterId, addMemberDto) {
        await this.findOwnedWorkspaceOrThrow(workspaceId, requesterId);
        await this.usersService.findOneById(addMemberDto.userId);
        const existingMembership = await this.membershipsRepository.findOne({
            where: {
                workspaceId,
                userId: addMemberDto.userId,
            },
        });
        if (existingMembership) {
            throw new common_1.ConflictException('User is already a member of this workspace');
        }
        const membership = this.membershipsRepository.create({
            workspaceId,
            userId: addMemberDto.userId,
            role: workspace_membership_entity_1.WorkspaceRole.MEMBER,
        });
        return this.membershipsRepository.save(membership);
    }
    async removeMember(workspaceId, requesterId, targetUserId) {
        const workspace = await this.findOwnedWorkspaceOrThrow(workspaceId, requesterId);
        await this.usersService.findOneById(targetUserId);
        const membership = await this.membershipsRepository.findOne({
            where: {
                workspaceId,
                userId: targetUserId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('Workspace membership not found');
        }
        if (membership.role === workspace_membership_entity_1.WorkspaceRole.OWNER) {
            throw new common_1.ForbiddenException('An owner cannot be removed from the workspace');
        }
        await this.membershipsRepository.remove(membership);
        return {
            message: 'Member removed successfully',
        };
    }
    async transferOwnership(workspaceId, requesterId, transferOwnershipDto) {
        const workspace = await this.findWorkspaceOrThrow(workspaceId);
        if (workspace.ownerId !== requesterId) {
            throw new common_1.ForbiddenException('Only the workspace owner can transfer ownership');
        }
        await this.usersService.findOneById(transferOwnershipDto.newOwnerId);
        const newOwnerMembership = await this.membershipsRepository.findOne({
            where: {
                workspaceId,
                userId: transferOwnershipDto.newOwnerId,
            },
        });
        if (!newOwnerMembership) {
            throw new common_2.BadRequestException('New owner must already be a workspace member');
        }
        return this.dataSource.transaction(async (manager) => {
            workspace.ownerId =
                transferOwnershipDto.newOwnerId;
            await manager.save(workspace);
            const oldOwnerMembership = await manager.findOne(workspace_membership_entity_1.WorkspaceMembership, {
                where: {
                    workspaceId,
                    userId: requesterId,
                },
            });
            if (!oldOwnerMembership) {
                throw new common_2.BadRequestException('Current owner membership not found');
            }
            oldOwnerMembership.role =
                workspace_membership_entity_1.WorkspaceRole.MEMBER;
            newOwnerMembership.role =
                workspace_membership_entity_1.WorkspaceRole.OWNER;
            await manager.save(oldOwnerMembership);
            await manager.save(newOwnerMembership);
            return {
                message: 'Workspace ownership transferred successfully',
            };
        });
    }
    async leaveWorkspace(workspaceId, userId) {
        const workspace = await this.findWorkspaceOrThrow(workspaceId);
        if (workspace.ownerId === userId) {
            throw new common_1.ForbiddenException('Workspace owner must transfer ownership before leaving');
        }
        const membership = await this.membershipsRepository.findOne({
            where: {
                workspaceId,
                userId,
            },
        });
        if (!membership) {
            throw new common_1.NotFoundException('Workspace membership not found');
        }
        await this.membershipsRepository.remove(membership);
        return {
            message: 'You left the workspace successfully',
        };
    }
    async updateWorkspace(workspaceId, requesterId, updateWorkspaceDto) {
        const workspace = await this.findWorkspaceOrThrow(workspaceId);
        if (workspace.ownerId !== requesterId) {
            throw new common_1.ForbiddenException('Only the workspace owner can update the workspace');
        }
        Object.assign(workspace, updateWorkspaceDto);
        return this.workspacesRepository.save(workspace);
    }
    async findOwnedWorkspaceOrThrow(workspaceId, requesterId) {
        const workspace = await this.findWorkspaceOrThrow(workspaceId);
        if (workspace.ownerId !== requesterId) {
            throw new common_1.ForbiddenException('Only the workspace owner can perform this action');
        }
        return workspace;
    }
    async deleteWorkspace(workspaceId, requesterId) {
        const workspace = await this.findOwnedWorkspaceOrThrow(workspaceId, requesterId);
        await this.workspacesRepository.remove(workspace);
        return {
            message: 'Workspace deleted successfully',
        };
    }
};
exports.WorkspacesService = WorkspacesService;
exports.WorkspacesService = WorkspacesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(workspace_entity_1.Workspace)),
    __param(1, (0, typeorm_1.InjectRepository)(workspace_membership_entity_1.WorkspaceMembership)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        users_service_1.UsersService])
], WorkspacesService);
//# sourceMappingURL=workspaces.service.js.map