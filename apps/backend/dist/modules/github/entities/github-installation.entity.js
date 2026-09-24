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
exports.GitHubInstallation = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const user_entity_1 = require("../../users/entities/user.entity");
let GitHubInstallation = class GitHubInstallation {
    id;
    githubInstallationId;
    connectedById;
    connectedBy;
    targetGithubId;
    targetLogin;
    targetType;
    status;
    createdAt;
    updatedAt;
};
exports.GitHubInstallation = GitHubInstallation;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], GitHubInstallation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'github_installation_id',
        type: 'varchar',
        length: 32,
        unique: true,
    }),
    __metadata("design:type", String)
], GitHubInstallation.prototype, "githubInstallationId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'connected_by_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], GitHubInstallation.prototype, "connectedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'connected_by_id',
    }),
    __metadata("design:type", Object)
], GitHubInstallation.prototype, "connectedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'target_github_id',
        type: 'varchar',
        length: 32,
    }),
    __metadata("design:type", String)
], GitHubInstallation.prototype, "targetGithubId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'target_login',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], GitHubInstallation.prototype, "targetLogin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'target_type',
        type: 'enum',
        enum: database_enums_1.GitHubAccountType,
    }),
    __metadata("design:type", String)
], GitHubInstallation.prototype, "targetType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.GitHubInstallationStatus,
    }),
    __metadata("design:type", String)
], GitHubInstallation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], GitHubInstallation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], GitHubInstallation.prototype, "updatedAt", void 0);
exports.GitHubInstallation = GitHubInstallation = __decorate([
    (0, typeorm_1.Entity)('github_installations')
], GitHubInstallation);
//# sourceMappingURL=github-installation.entity.js.map