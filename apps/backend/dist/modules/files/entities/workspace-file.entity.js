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
exports.WorkspaceFile = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../../tasks/entities/task.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let WorkspaceFile = class WorkspaceFile {
    id;
    workspaceId;
    workspace;
    uploaderId;
    uploader;
    taskId;
    task;
    originalName;
    displayName;
    storageKey;
    mimeType;
    sizeBytes;
    createdAt;
    deletedAt;
};
exports.WorkspaceFile = WorkspaceFile;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], WorkspaceFile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], WorkspaceFile.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], WorkspaceFile.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'uploader_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceFile.prototype, "uploaderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'uploader_id',
    }),
    __metadata("design:type", Object)
], WorkspaceFile.prototype, "uploader", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'task_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceFile.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'task_id',
    }),
    __metadata("design:type", Object)
], WorkspaceFile.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'original_name',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], WorkspaceFile.prototype, "originalName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'display_name',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], WorkspaceFile.prototype, "displayName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'storage_key',
        type: 'varchar',
        length: 512,
        unique: true,
    }),
    __metadata("design:type", String)
], WorkspaceFile.prototype, "storageKey", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'mime_type',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceFile.prototype, "mimeType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'size_bytes',
        type: 'bigint',
    }),
    __metadata("design:type", String)
], WorkspaceFile.prototype, "sizeBytes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], WorkspaceFile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceFile.prototype, "deletedAt", void 0);
exports.WorkspaceFile = WorkspaceFile = __decorate([
    (0, typeorm_1.Entity)('workspace_files')
], WorkspaceFile);
//# sourceMappingURL=workspace-file.entity.js.map