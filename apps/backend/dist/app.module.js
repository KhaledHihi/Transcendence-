"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const health_controller_1 = require("./health.controller");
const users_module_1 = require("./modules/users/users.module");
const workspaces_module_1 = require("./modules/workspaces/workspaces.module");
const tasks_module_1 = require("./modules/tasks/tasks.module");
const social_module_1 = require("./modules/social/social.module");
const chat_module_1 = require("./modules/chat/chat.module");
const files_module_1 = require("./modules/files/files.module");
const notes_module_1 = require("./modules/notes/notes.module");
const github_module_1 = require("./modules/github/github.module");
const activities_module_1 = require("./modules/activities/activities.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.getOrThrow('DB_HOST'),
                    port: Number(configService.getOrThrow('DB_PORT')),
                    username: configService.getOrThrow('DB_USER'),
                    password: configService.getOrThrow('DB_PASSWORD'),
                    database: configService.getOrThrow('DB_NAME'),
                    autoLoadEntities: true,
                    synchronize: false,
                }),
            }),
            users_module_1.UsersModule,
            workspaces_module_1.WorkspacesModule,
            tasks_module_1.TasksModule,
            social_module_1.SocialModule,
            chat_module_1.ChatModule,
            files_module_1.FilesModule,
            notes_module_1.NotesModule,
            github_module_1.GitHubModule,
            activities_module_1.ActivitiesModule,
            notifications_module_1.NotificationsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController, health_controller_1.HealthController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map