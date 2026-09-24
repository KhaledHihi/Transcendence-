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
exports.WorkspaceInvitation = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("./workspace.entity");
let WorkspaceInvitation = class WorkspaceInvitation {
    id;
    workspaceId;
    workspace;
    invitedById;
    invitedBy;
    invitedUserId;
    invitedUser;
    invitedEmail;
    status;
    tokenHash;
    expiresAt;
    respondedAt;
    createdAt;
};
exports.WorkspaceInvitation = WorkspaceInvitation;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], WorkspaceInvitation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], WorkspaceInvitation.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], WorkspaceInvitation.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'invited_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "invitedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'invited_by_id',
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "invitedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'invited_user_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "invitedUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'invited_user_id',
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "invitedUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'invited_email',
        type: 'varchar',
        length: 320,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "invitedEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.InvitationStatus,
    }),
    __metadata("design:type", String)
], WorkspaceInvitation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'token_hash',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "tokenHash", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'expires_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'responded_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceInvitation.prototype, "respondedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], WorkspaceInvitation.prototype, "createdAt", void 0);
exports.WorkspaceInvitation = WorkspaceInvitation = __decorate([
    (0, typeorm_1.Entity)('workspace_invitations')
], WorkspaceInvitation);
//# sourceMappingURL=workspace-invitation.entity.js.map