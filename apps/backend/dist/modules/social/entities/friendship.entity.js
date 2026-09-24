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
exports.Friendship = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const user_entity_1 = require("../../users/entities/user.entity");
let Friendship = class Friendship {
    id;
    userAId;
    userA;
    userBId;
    userB;
    requestedById;
    requestedBy;
    status;
    requestedAt;
    respondedAt;
};
exports.Friendship = Friendship;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Friendship.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_a_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Friendship.prototype, "userAId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_a_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Friendship.prototype, "userA", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_b_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Friendship.prototype, "userBId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_b_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Friendship.prototype, "userB", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'requested_by_id',
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], Friendship.prototype, "requestedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'requested_by_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Friendship.prototype, "requestedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.FriendshipStatus,
    }),
    __metadata("design:type", String)
], Friendship.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'requested_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], Friendship.prototype, "requestedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'responded_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Friendship.prototype, "respondedAt", void 0);
exports.Friendship = Friendship = __decorate([
    (0, typeorm_1.Entity)('friendships'),
    (0, typeorm_1.Unique)('uq_friendships_user_pair', ['userAId', 'userBId'])
], Friendship);
//# sourceMappingURL=friendship.entity.js.map