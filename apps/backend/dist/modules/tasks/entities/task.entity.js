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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let Task = class Task {
    id;
    workspaceId;
    workspace;
    creatorId;
    creator;
    title;
    description;
    acceptanceCriteria;
    status;
    priority;
    position;
    isBlocked;
    blockedReason;
    blockedAt;
    dueAt;
    createdAt;
    updatedAt;
    completedAt;
    cancelledAt;
    deletedAt;
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Task.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], Task.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'creator_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'creator_id',
    }),
    __metadata("design:type", Object)
], Task.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 200,
    }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'acceptance_criteria',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "acceptanceCriteria", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.TaskStatus,
    }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.TaskPriority,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
    }),
    __metadata("design:type", Number)
], Task.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_blocked',
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Task.prototype, "isBlocked", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'blocked_reason',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "blockedReason", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'blocked_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "blockedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'due_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "dueAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'completed_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cancelled_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "cancelledAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Task.prototype, "deletedAt", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)('tasks'),
    (0, typeorm_1.Index)('idx_tasks_workspace_status_position', [
        'workspaceId',
        'status',
        'position',
    ]),
    (0, typeorm_1.Index)('idx_tasks_workspace_priority', ['workspaceId', 'priority']),
    (0, typeorm_1.Index)('idx_tasks_due_at', ['dueAt'])
], Task);
//# sourceMappingURL=task.entity.js.map