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
exports.TaskRepositoryLink = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const repository_entity_1 = require("./repository.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let TaskRepositoryLink = class TaskRepositoryLink {
    id;
    taskId;
    task;
    repositoryId;
    repository;
    linkType;
    branchName;
    filePath;
    commitSha;
    createdById;
    createdBy;
    createdAt;
};
exports.TaskRepositoryLink = TaskRepositoryLink;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskRepositoryLink.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'task_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskRepositoryLink.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'task_id',
    }),
    __metadata("design:type", task_entity_1.Task)
], TaskRepositoryLink.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'repository_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], TaskRepositoryLink.prototype, "repositoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => repository_entity_1.Repository, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'repository_id',
    }),
    __metadata("design:type", repository_entity_1.Repository)
], TaskRepositoryLink.prototype, "repository", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'link_type',
        type: 'enum',
        enum: database_enums_1.TaskRepositoryLinkType,
    }),
    __metadata("design:type", String)
], TaskRepositoryLink.prototype, "linkType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'branch_name',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskRepositoryLink.prototype, "branchName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'file_path',
        type: 'varchar',
        length: 2048,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskRepositoryLink.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'commit_sha',
        type: 'varchar',
        length: 64,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskRepositoryLink.prototype, "commitSha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaskRepositoryLink.prototype, "createdById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'created_by_id',
    }),
    __metadata("design:type", Object)
], TaskRepositoryLink.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], TaskRepositoryLink.prototype, "createdAt", void 0);
exports.TaskRepositoryLink = TaskRepositoryLink = __decorate([
    (0, typeorm_1.Entity)('task_repository_links')
], TaskRepositoryLink);
//# sourceMappingURL=task-repository-link.entity.js.map