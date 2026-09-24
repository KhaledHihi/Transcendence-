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
exports.DirectConversation = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
let DirectConversation = class DirectConversation {
    id;
    userAId;
    userA;
    userBId;
    userB;
    userALastReadAt;
    userBLastReadAt;
    lastMessageAt;
    createdAt;
    updatedAt;
};
exports.DirectConversation = DirectConversation;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], DirectConversation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_a_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], DirectConversation.prototype, "userAId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_a_id',
    }),
    __metadata("design:type", user_entity_1.User)
], DirectConversation.prototype, "userA", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_b_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], DirectConversation.prototype, "userBId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_b_id',
    }),
    __metadata("design:type", user_entity_1.User)
], DirectConversation.prototype, "userB", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_a_last_read_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DirectConversation.prototype, "userALastReadAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_b_last_read_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DirectConversation.prototype, "userBLastReadAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_message_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DirectConversation.prototype, "lastMessageAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], DirectConversation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], DirectConversation.prototype, "updatedAt", void 0);
exports.DirectConversation = DirectConversation = __decorate([
    (0, typeorm_1.Entity)('direct_conversations'),
    (0, typeorm_1.Unique)('uq_direct_conversations_user_pair', ['userAId', 'userBId']),
    (0, typeorm_1.Index)('idx_direct_conversations_last_message_at', ['lastMessageAt'])
], DirectConversation);
//# sourceMappingURL=direct-conversation.entity.js.map