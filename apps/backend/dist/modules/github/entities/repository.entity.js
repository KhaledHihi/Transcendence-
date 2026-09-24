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
exports.Repository = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const github_installation_entity_1 = require("./github-installation.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let Repository = class Repository {
    id;
    workspaceId;
    workspace;
    installationId;
    installation;
    connectedById;
    connectedBy;
    githubRepositoryId;
    ownerLogin;
    name;
    fullName;
    repositoryUrl;
    defaultBranch;
    visibility;
    lastSyncedAt;
    createdAt;
    updatedAt;
    disconnectedAt;
};
exports.Repository = Repository;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Repository.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Repository.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], Repository.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'installation_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Repository.prototype, "installationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => github_installation_entity_1.GitHubInstallation, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'installation_id',
    }),
    __metadata("design:type", Object)
], Repository.prototype, "installation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'connected_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Repository.prototype, "connectedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'connected_by_id',
    }),
    __metadata("design:type", Object)
], Repository.prototype, "connectedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'github_repository_id',
        type: 'varchar',
        length: 32,
    }),
    __metadata("design:type", String)
], Repository.prototype, "githubRepositoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'owner_login',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], Repository.prototype, "ownerLogin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], Repository.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'full_name',
        type: 'varchar',
        length: 512,
    }),
    __metadata("design:type", String)
], Repository.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'repository_url',
        type: 'varchar',
        length: 1000,
    }),
    __metadata("design:type", String)
], Repository.prototype, "repositoryUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'default_branch',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], Repository.prototype, "defaultBranch", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.RepositoryVisibility,
    }),
    __metadata("design:type", String)
], Repository.prototype, "visibility", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_synced_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Repository.prototype, "lastSyncedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Repository.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Repository.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'disconnected_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Repository.prototype, "disconnectedAt", void 0);
exports.Repository = Repository = __decorate([
    (0, typeorm_1.Entity)('repositories'),
    (0, typeorm_1.Unique)('uq_repositories_workspace_github_repository', [
        'workspaceId',
        'githubRepositoryId',
    ])
], Repository);
//# sourceMappingURL=repository.entity.js.map