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
exports.TaskDependency = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let TaskDependency = class TaskDependency {
    id;
    taskId;
    task;
    dependsOnTaskId;
    dependsOnTask;
    createdById;
    createdBy;
    createdAt;
};
exports.TaskDependency = TaskDependency;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskDependency.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'task_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskDependency.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'task_id',
    }),
    __metadata("design:type", task_entity_1.Task)
], TaskDependency.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'depends_on_task_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskDependency.prototype, "dependsOnTaskId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'depends_on_task_id',
    }),
    __metadata("design:type", task_entity_1.Task)
], TaskDependency.prototype, "dependsOnTask", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskDependency.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'created_by_id',
    }),
    __metadata("design:type", Object)
], TaskDependency.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], TaskDependency.prototype, "createdAt", void 0);
exports.TaskDependency = TaskDependency = __decorate([
    (0, typeorm_1.Entity)('task_dependencies'),
    (0, typeorm_1.Unique)('uq_task_dependencies_task_depends_on', ['taskId', 'dependsOnTaskId'])
], TaskDependency);
//# sourceMappingURL=task-dependency.entity.js.map