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
exports.ChatMessage = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let ChatMessage = class ChatMessage {
    id;
    workspaceId;
    workspace;
    senderId;
    sender;
    content;
    createdAt;
    editedAt;
    deletedAt;
};
exports.ChatMessage = ChatMessage;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], ChatMessage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'workspace_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], ChatMessage.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'workspace_id',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], ChatMessage.prototype, "workspace", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sender_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ChatMessage.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'sender_id',
    }),
    __metadata("design:type", Object)
], ChatMessage.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], ChatMessage.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], ChatMessage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'edited_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ChatMessage.prototype, "editedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ChatMessage.prototype, "deletedAt", void 0);
exports.ChatMessage = ChatMessage = __decorate([
    (0, typeorm_1.Entity)('chat_messages'),
    (0, typeorm_1.Index)('idx_chat_messages_workspace_created_at', ['workspaceId', 'createdAt'])
], ChatMessage);
//# sourceMappingURL=chat-message.entity.js.map