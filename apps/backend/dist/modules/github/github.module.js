"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const github_controller_1 = require("./controllers/github.controller");
const github_account_entity_1 = require("./entities/github-account.entity");
const github_installation_entity_1 = require("./entities/github-installation.entity");
const github_webhook_delivery_entity_1 = require("./entities/github-webhook-delivery.entity");
const repository_entity_1 = require("./entities/repository.entity");
const repository_commit_entity_1 = require("./entities/repository-commit.entity");
const repository_entry_entity_1 = require("./entities/repository-entry.entity");
const task_repository_link_entity_1 = require("./entities/task-repository-link.entity");
const github_service_1 = require("./services/github.service");
let GitHubModule = class GitHubModule {
};
exports.GitHubModule = GitHubModule;
exports.GitHubModule = GitHubModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                github_account_entity_1.GitHubAccount,
                github_installation_entity_1.GitHubInstallation,
                repository_entity_1.Repository,
                repository_commit_entity_1.RepositoryCommit,
                repository_entry_entity_1.RepositoryEntry,
                task_repository_link_entity_1.TaskRepositoryLink,
                github_webhook_delivery_entity_1.GitHubWebhookDelivery,
            ]),
        ],
        controllers: [github_controller_1.GitHubController],
        providers: [github_service_1.GitHubService],
        exports: [github_service_1.GitHubService],
    })
], GitHubModule);
//# sourceMappingURL=github.module.js.map