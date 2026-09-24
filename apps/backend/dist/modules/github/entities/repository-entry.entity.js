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
exports.RepositoryEntry = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const repository_entity_1 = require("./repository.entity");
let RepositoryEntry = class RepositoryEntry {
    id;
    repositoryId;
    repository;
    branchName;
    path;
    pathHash;
    parentPath;
    name;
    entryType;
    objectSha;
    sizeBytes;
    lastSyncedAt;
};
exports.RepositoryEntry = RepositoryEntry;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'repository_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "repositoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => repository_entity_1.Repository, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'repository_id',
    }),
    __metadata("design:type", repository_entity_1.Repository)
], RepositoryEntry.prototype, "repository", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'branch_name',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "branchName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 2048,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'path_hash',
        type: 'char',
        length: 64,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "pathHash", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'parent_path',
        type: 'varchar',
        length: 2048,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryEntry.prototype, "parentPath", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'entry_type',
        type: 'enum',
        enum: database_enums_1.RepositoryEntryType,
    }),
    __metadata("design:type", String)
], RepositoryEntry.prototype, "entryType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'object_sha',
        type: 'varchar',
        length: 64,
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryEntry.prototype, "objectSha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'size_bytes',
        type: 'bigint',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RepositoryEntry.prototype, "sizeBytes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_synced_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], RepositoryEntry.prototype, "lastSyncedAt", void 0);
exports.RepositoryEntry = RepositoryEntry = __decorate([
    (0, typeorm_1.Entity)('repository_entries'),
    (0, typeorm_1.Unique)('uq_repository_entries_repository_branch_path_hash', [
        'repositoryId',
        'branchName',
        'pathHash',
    ])
], RepositoryEntry);
//# sourceMappingURL=repository-entry.entity.js.map