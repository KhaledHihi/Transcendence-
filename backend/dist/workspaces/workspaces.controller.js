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
exports.WorkspacesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const response_message_decorator_1 = require("../common/decorators/response-message.decorator");
const add_member_dto_1 = require("./dto/add-member.dto");
const create_workspace_dto_1 = require("./dto/create-workspace.dto");
const transfer_ownership_dto_1 = require("./dto/transfer-ownership.dto");
const update_workspace_dto_1 = require("./dto/update-workspace.dto");
const workspaces_service_1 = require("./workspaces.service");
let WorkspacesController = class WorkspacesController {
    workspacesService;
    constructor(workspacesService) {
        this.workspacesService = workspacesService;
    }
    create(createWorkspaceDto, request) {
        return this.workspacesService.create(createWorkspaceDto, request.user.sub);
    }
    findMine(request) {
        return this.workspacesService.findMine(request.user.sub);
    }
    findOne(id, request) {
        return this.workspacesService.findOneForMember(id, request.user.sub);
    }
    addMember(workspaceId, addMemberDto, request) {
        return this.workspacesService.addMember(workspaceId, request.user.sub, addMemberDto);
    }
    removeMember(workspaceId, userId, request) {
        return this.workspacesService.removeMember(workspaceId, request.user.sub, userId);
    }
    transferOwnership(workspaceId, transferOwnershipDto, request) {
        return this.workspacesService.transferOwnership(workspaceId, request.user.sub, transferOwnershipDto);
    }
    leaveWorkspace(workspaceId, request) {
        return this.workspacesService.leaveWorkspace(workspaceId, request.user.sub);
    }
    updateWorkspace(workspaceId, updateWorkspaceDto, request) {
        return this.workspacesService.updateWorkspace(workspaceId, request.user.sub, updateWorkspaceDto);
    }
    deleteWorkspace(workspaceId, request) {
        return this.workspacesService.deleteWorkspace(workspaceId, request.user.sub);
    }
};
exports.WorkspacesController = WorkspacesController;
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspace created successfully'),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workspace_dto_1.CreateWorkspaceDto, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "create", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspaces fetched successfully'),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "findMine", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspace fetched successfully'),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "findOne", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Member added successfully'),
    (0, common_1.Post)(':workspaceId/members'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_member_dto_1.AddMemberDto, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "addMember", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Member removed successfully'),
    (0, common_1.Delete)(':workspaceId/members/:userId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "removeMember", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspace ownership transferred successfully'),
    (0, common_1.Patch)(':workspaceId/owner'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transfer_ownership_dto_1.TransferOwnershipDto, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "transferOwnership", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspace left successfully'),
    (0, common_1.Delete)(':workspaceId/leave'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "leaveWorkspace", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspace updated successfully'),
    (0, common_1.Patch)(':workspaceId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_workspace_dto_1.UpdateWorkspaceDto, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "updateWorkspace", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Workspace deleted successfully'),
    (0, common_1.Delete)(':workspaceId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "deleteWorkspace", null);
exports.WorkspacesController = WorkspacesController = __decorate([
    (0, common_1.Controller)('workspaces'),
    __metadata("design:paramtypes", [workspaces_service_1.WorkspacesService])
], WorkspacesController);
//# sourceMappingURL=workspaces.controller.js.map