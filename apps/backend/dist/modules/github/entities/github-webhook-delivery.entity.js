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
exports.GitHubWebhookDelivery = void 0;
const typeorm_1 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const repository_entity_1 = require("./repository.entity");
let GitHubWebhookDelivery = class GitHubWebhookDelivery {
    id;
    deliveryId;
    repositoryId;
    repository;
    eventType;
    eventAction;
    status;
    receivedAt;
    processedAt;
    errorMessage;
};
exports.GitHubWebhookDelivery = GitHubWebhookDelivery;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'char',
        length: 36,
    }),
    __metadata("design:type", String)
], GitHubWebhookDelivery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'delivery_id',
        type: 'varchar',
        length: 100,
        unique: true,
    }),
    __metadata("design:type", String)
], GitHubWebhookDelivery.prototype, "deliveryId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'repository_id',
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", Object)
], GitHubWebhookDelivery.prototype, "repositoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => repository_entity_1.Repository, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'repository_id',
    }),
    __metadata("design:type", Object)
], GitHubWebhookDelivery.prototype, "repository", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'event_type',
        type: 'varchar',
        length: 100,
    }),
    __metadata("design:type", String)
], GitHubWebhookDelivery.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'event_action',
        type: 'varchar',
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", Object)
], GitHubWebhookDelivery.prototype, "eventAction", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: database_enums_1.WebhookStatus,
    }),
    __metadata("design:type", String)
], GitHubWebhookDelivery.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'received_at',
        type: 'datetime',
        precision: 6,
    }),
    __metadata("design:type", Date)
], GitHubWebhookDelivery.prototype, "receivedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'processed_at',
        type: 'datetime',
        precision: 6,
        nullable: true,
    }),
    __metadata("design:type", Object)
], GitHubWebhookDelivery.prototype, "processedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'error_message',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", Object)
], GitHubWebhookDelivery.prototype, "errorMessage", void 0);
exports.GitHubWebhookDelivery = GitHubWebhookDelivery = __decorate([
    (0, typeorm_1.Entity)('github_webhook_deliveries')
], GitHubWebhookDelivery);
//# sourceMappingURL=github-webhook-delivery.entity.js.map