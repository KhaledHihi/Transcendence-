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
exports.DirectMessage = void 0;
const typeorm_1 = require("typeorm");
const direct_conversation_entity_1 = require("./direct-conversation.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let DirectMessage = class DirectMessage {
    id;
    conversationId;
    conversation;
    senderId;
    sender;
    content;
    createdAt;
    editedAt;
    deletedAt;
};
exports.DirectMessage = DirectMessage;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], DirectMessage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'conversation_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], DirectMessage.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => direct_conversation_entity_1.DirectConversation, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'conversation_id',
    }),
    __metadata("design:type", direct_conversation_entity_1.DirectConversation)
], DirectMessage.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sender_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], DirectMessage.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'sender_id',
    }),
    __metadata("design:type", user_entity_1.User)
], DirectMessage.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], DirectMessage.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], DirectMessage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'edited_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DirectMessage.prototype, "editedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DirectMessage.prototype, "deletedAt", void 0);
exports.DirectMessage = DirectMessage = __decorate([
    (0, typeorm_1.Entity)('direct_messages'),
    (0, typeorm_1.Index)('idx_direct_messages_conversation_created_at', [
        'conversationId',
        'createdAt',
    ])
], DirectMessage);
//# sourceMappingURL=direct-message.entity.js.map