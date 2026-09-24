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
exports.WorkspaceKanbanSetting = void 0;
const typeorm_1 = require("typeorm");
const workspace_entity_1 = require("./workspace.entity");
let WorkspaceKanbanSetting = class WorkspaceKanbanSetting {
    id;
    workspaceId;
    workspace;
    activeWipLimit;
    definitionOfReady;
    definitionOfDone;
    createdAt;
    updatedAt;
};
exports.WorkspaceKanbanSetting = WorkspaceKanbanSetting;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], WorkspaceKanbanSetting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], WorkspaceKanbanSetting.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], WorkspaceKanbanSetting.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'active_wip_limit',
        type: 'int',
        default: 3,
    }),
    __metadata("design:type", Number)
], WorkspaceKanbanSetting.prototype, "activeWipLimit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'definition_of_ready',
        type: 'json',
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceKanbanSetting.prototype, "definitionOfReady", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'definition_of_done',
        type: 'json',
        nullable: true,
    }),
    __metadata("design:type", Object)
], WorkspaceKanbanSetting.prototype, "definitionOfDone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], WorkspaceKanbanSetting.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], WorkspaceKanbanSetting.prototype, "updatedAt", void 0);
exports.WorkspaceKanbanSetting = WorkspaceKanbanSetting = __decorate([
    (0, typeorm_1.Check)('chk_workspace_kanban_settings_active_wip_limit_positive', '`active_wip_limit` > 0'),
    (0, typeorm_1.Entity)('workspace_kanban_settings')
], WorkspaceKanbanSetting);
//# sourceMappingURL=workspace-kanban-setting.entity.js.map