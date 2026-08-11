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
const create_workspace_dto_1 = require("./dto/create-workspace.dto");
const workspaces_service_1 = require("./workspaces.service");
const add_member_dto_1 = require("./dto/add-member.dto");
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
};
exports.WorkspacesController = WorkspacesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workspace_dto_1.CreateWorkspaceDto, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "findOne", null);
__decorate([
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
    (0, common_1.Delete)(':workspaceId/members/:userId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('workspaceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], WorkspacesController.prototype, "removeMember", null);
exports.WorkspacesController = WorkspacesController = __decorate([
    (0, common_1.Controller)('workspaces'),
    __metadata("design:paramtypes", [workspaces_service_1.WorkspacesService])
], WorkspacesController);
//# sourceMappingURL=workspaces.controller.js.map