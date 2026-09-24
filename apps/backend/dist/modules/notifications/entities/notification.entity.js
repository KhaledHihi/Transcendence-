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
exports.Notification = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let Notification = class Notification {
    id;
    userId;
    user;
    workspaceId;
    workspace;
    type;
    message;
    relatedResourceType;
    relatedResourceId;
    payload;
    createdAt;
    readAt;
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Notification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Notification.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Notification.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Notification.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", Object)
], Notification.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
    }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 1000,
    }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'related_resource_type',
        type: 'varchar',
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Notification.prototype, "relatedResourceType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'related_resource_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Notification.prototype, "relatedResourceId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Notification.prototype, "payload", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'read_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Notification.prototype, "readAt", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)('notifications'),
    (0, typeorm_1.Index)('idx_notifications_user_read_created_at', [
        'userId',
        'readAt',
        'createdAt',
    ])
], Notification);
//# sourceMappingURL=notification.entity.js.map