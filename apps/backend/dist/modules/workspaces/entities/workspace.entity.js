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
exports.Workspace = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
let Workspace = class Workspace {
    id;
    ownerId;
    owner;
    name;
    description;
    createdAt;
    updatedAt;
    archivedAt;
    deletedAt;
};
exports.Workspace = Workspace;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'owner_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'owner_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Workspace.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 120,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", Object)
], Workspace.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Workspace.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Workspace.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'archived_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Workspace.prototype, "archivedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Workspace.prototype, "deletedAt", void 0);
exports.Workspace = Workspace = __decorate([
    (0, typeorm_1.Entity)('workspaces')
], Workspace);
//# sourceMappingURL=workspace.entity.js.map