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
exports.TaskAssignment = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let TaskAssignment = class TaskAssignment {
    id;
    taskId;
    task;
    userId;
    user;
    assignedById;
    assignedBy;
    assignedAt;
};
exports.TaskAssignment = TaskAssignment;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskAssignment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'task_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskAssignment.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => task_entity_1.Task, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'task_id',
    }),
    __metadata("design:type", task_entity_1.Task)
], TaskAssignment.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskAssignment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.User)
], TaskAssignment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'assigned_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskAssignment.prototype, "assignedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'assigned_by_id',
    }),
    __metadata("design:type", Object)
], TaskAssignment.prototype, "assignedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'assigned_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], TaskAssignment.prototype, "assignedAt", void 0);
exports.TaskAssignment = TaskAssignment = __decorate([
    (0, typeorm_1.Entity)('task_assignments')
], TaskAssignment);
//# sourceMappingURL=task-assignment.entity.js.map