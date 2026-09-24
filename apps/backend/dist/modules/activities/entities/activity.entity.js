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
exports.Activity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let Activity = class Activity {
    id;
    workspaceId;
    workspace;
    actorUserId;
    actorUser;
    actionType;
    resourceType;
    resourceId;
    metadata;
    createdAt;
};
exports.Activity = Activity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Activity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], Activity.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actor_user_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Activity.prototype, "actorUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'actor_user_id',
    }),
    __metadata("design:type", Object)
], Activity.prototype, "actorUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'action_type',
        type: 'varchar',
        length: 100,
    }),
    __metadata("design:type", String)
], Activity.prototype, "actionType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'resource_type',
        type: 'varchar',
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Activity.prototype, "resourceType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'resource_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Activity.prototype, "resourceId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Activity.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Activity.prototype, "createdAt", void 0);
exports.Activity = Activity = __decorate([
    (0, typeorm_1.Entity)('activities'),
    (0, typeorm_1.Index)('idx_activities_workspace_created_at', ['workspaceId', 'createdAt'])
], Activity);
//# sourceMappingURL=activity.entity.js.map