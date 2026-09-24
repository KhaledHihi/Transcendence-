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
exports.RepositoryCommit = void 0;
const typeorm_1 = require("typeorm");
const repository_entity_1 = require("./repository.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let RepositoryCommit = class RepositoryCommit {
    id;
    repositoryId;
    repository;
    sha;
    message;
    authorGithubUserId;
    authorName;
    committerName;
    matchedUserId;
    matchedUser;
    committedAt;
    githubUrl;
    createdAt;
};
exports.RepositoryCommit = RepositoryCommit;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], RepositoryCommit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'repository_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], RepositoryCommit.prototype, "repositoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => repository_entity_1.Repository, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'repository_id',
    }),
    __metadata("design:type", repository_entity_1.Repository)
], RepositoryCommit.prototype, "repository", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 64,
    }),
    __metadata("design:type", String)
], RepositoryCommit.prototype, "sha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], RepositoryCommit.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'author_github_user_id',
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryCommit.prototype, "authorGithubUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'author_name',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryCommit.prototype, "authorName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'committer_name',
        type: 'varchar',
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryCommit.prototype, "committerName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'matched_user_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryCommit.prototype, "matchedUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'matched_user_id',
    }),
    __metadata("design:type", Object)
], RepositoryCommit.prototype, "matchedUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'committed_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], RepositoryCommit.prototype, "committedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'github_url',
        type: 'varchar',
        length: 1000,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryCommit.prototype, "githubUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], RepositoryCommit.prototype, "createdAt", void 0);
exports.RepositoryCommit = RepositoryCommit = __decorate([
    (0, typeorm_1.Entity)('repository_commits'),
    (0, typeorm_1.Unique)('uq_repository_commits_repository_sha', ['repositoryId', 'sha']),
    (0, typeorm_1.Index)('idx_repository_commits_repository_committed_at', [
        'repositoryId',
        'committedAt',
    ])
], RepositoryCommit);
//# sourceMappingURL=repository-commit.entity.js.map