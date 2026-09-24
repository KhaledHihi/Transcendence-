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
exports.TaskStatusHistory = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const task_entity_1 = require("./task.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let TaskStatusHistory = class TaskStatusHistory {
    id;
    taskId;
    task;
    fromStatus;
    toStatus;
    changedById;
    changedBy;
    changedAt;
    note;
};
exports.TaskStatusHistory = TaskStatusHistory;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskStatusHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'task_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskStatusHistory.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'task_id',
    }),
    __metadata("design:type", task_entity_1.Task)
], TaskStatusHistory.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'from_status',
        type: 'enum',
        enum: database_enums_1.TaskStatus,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskStatusHistory.prototype, "fromStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'to_status',
        type: 'enum',
        enum: database_enums_1.TaskStatus,
    }),
    __metadata("design:type", String)
], TaskStatusHistory.prototype, "toStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'changed_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskStatusHistory.prototype, "changedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'changed_by_id',
    }),
    __metadata("design:type", Object)
], TaskStatusHistory.prototype, "changedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'changed_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], TaskStatusHistory.prototype, "changedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 500,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskStatusHistory.prototype, "note", void 0);
exports.TaskStatusHistory = TaskStatusHistory = __decorate([
    (0, typeorm_1.Entity)('task_status_history'),
    (0, typeorm_1.Index)('idx_task_status_history_task_changed_at', ['taskId', 'changedAt'])
], TaskStatusHistory);
//# sourceMappingURL=task-status-history.entity.js.map