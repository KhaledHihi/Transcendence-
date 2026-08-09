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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMembership = exports.WorkspaceRole = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("./workspace.entity");
var WorkspaceRole;
(function (WorkspaceRole) {
    WorkspaceRole["OWNER"] = "owner";
    WorkspaceRole["MEMBER"] = "member";
})(WorkspaceRole || (exports.WorkspaceRole = WorkspaceRole = {}));
let WorkspaceMembership = class WorkspaceMembership {
    id;
    workspaceId;
    userId;
    role;
    workspace;
    user;
    createdAt;
};
exports.WorkspaceMembership = WorkspaceMembership;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WorkspaceMembership.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'int',
    }),
    __metadata("design:type", Number)
], WorkspaceMembership.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'int',
    }),
    __metadata("design:type", Number)
], WorkspaceMembership.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: WorkspaceRole,
        default: WorkspaceRole.MEMBER,
    }),
    __metadata("design:type", String)
], WorkspaceMembership.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], WorkspaceMembership.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.User)
], WorkspaceMembership.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], WorkspaceMembership.prototype, "createdAt", void 0);
exports.WorkspaceMembership = WorkspaceMembership = __decorate([
    (0, typeorm_1.Entity)('workspace_memberships'),
    (0, typeorm_1.Unique)(['workspaceId', 'userId'])
], WorkspaceMembership);
//# sourceMappingURL=workspace-membership.entity.js.map