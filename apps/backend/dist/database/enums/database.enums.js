"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookStatus = exports.TaskRepositoryLinkType = exports.RepositoryEntryType = exports.RepositoryVisibility = exports.GitHubInstallationStatus = exports.GitHubAccountType = exports.TaskPriority = exports.TaskStatus = exports.FriendshipStatus = exports.InvitationStatus = exports.UserStatus = exports.AppRole = void 0;
var AppRole;
(function (AppRole) {
    AppRole["USER"] = "USER";
    AppRole["ADMIN"] = "ADMIN";
})(AppRole || (exports.AppRole = AppRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["DISABLED"] = "DISABLED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var InvitationStatus;
(function (InvitationStatus) {
    InvitationStatus["PENDING"] = "PENDING";
    InvitationStatus["ACCEPTED"] = "ACCEPTED";
    InvitationStatus["REJECTED"] = "REJECTED";
    InvitationStatus["CANCELLED"] = "CANCELLED";
    InvitationStatus["EXPIRED"] = "EXPIRED";
})(InvitationStatus || (exports.InvitationStatus = InvitationStatus = {}));
var FriendshipStatus;
(function (FriendshipStatus) {
    FriendshipStatus["PENDING"] = "PENDING";
    FriendshipStatus["ACCEPTED"] = "ACCEPTED";
    FriendshipStatus["REJECTED"] = "REJECTED";
    FriendshipStatus["CANCELLED"] = "CANCELLED";
})(FriendshipStatus || (exports.FriendshipStatus = FriendshipStatus = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["BACKLOG"] = "BACKLOG";
    TaskStatus["READY"] = "READY";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["REVIEW"] = "REVIEW";
    TaskStatus["DONE"] = "DONE";
    TaskStatus["CANCELLED"] = "CANCELLED";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "LOW";
    TaskPriority["MEDIUM"] = "MEDIUM";
    TaskPriority["HIGH"] = "HIGH";
    TaskPriority["URGENT"] = "URGENT";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
var GitHubAccountType;
(function (GitHubAccountType) {
    GitHubAccountType["USER"] = "USER";
    GitHubAccountType["ORGANIZATION"] = "ORGANIZATION";
})(GitHubAccountType || (exports.GitHubAccountType = GitHubAccountType = {}));
var GitHubInstallationStatus;
(function (GitHubInstallationStatus) {
    GitHubInstallationStatus["ACTIVE"] = "ACTIVE";
    GitHubInstallationStatus["SUSPENDED"] = "SUSPENDED";
    GitHubInstallationStatus["DELETED"] = "DELETED";
})(GitHubInstallationStatus || (exports.GitHubInstallationStatus = GitHubInstallationStatus = {}));
var RepositoryVisibility;
(function (RepositoryVisibility) {
    RepositoryVisibility["PUBLIC"] = "PUBLIC";
    RepositoryVisibility["PRIVATE"] = "PRIVATE";
    RepositoryVisibility["INTERNAL"] = "INTERNAL";
})(RepositoryVisibility || (exports.RepositoryVisibility = RepositoryVisibility = {}));
var RepositoryEntryType;
(function (RepositoryEntryType) {
    RepositoryEntryType["FILE"] = "FILE";
    RepositoryEntryType["DIRECTORY"] = "DIRECTORY";
    RepositoryEntryType["SYMLINK"] = "SYMLINK";
    RepositoryEntryType["SUBMODULE"] = "SUBMODULE";
})(RepositoryEntryType || (exports.RepositoryEntryType = RepositoryEntryType = {}));
var TaskRepositoryLinkType;
(function (TaskRepositoryLinkType) {
    TaskRepositoryLinkType["REPOSITORY"] = "REPOSITORY";
    TaskRepositoryLinkType["BRANCH"] = "BRANCH";
    TaskRepositoryLinkType["FILE"] = "FILE";
    TaskRepositoryLinkType["COMMIT"] = "COMMIT";
})(TaskRepositoryLinkType || (exports.TaskRepositoryLinkType = TaskRepositoryLinkType = {}));
var WebhookStatus;
(function (WebhookStatus) {
    WebhookStatus["RECEIVED"] = "RECEIVED";
    WebhookStatus["PROCESSING"] = "PROCESSING";
    WebhookStatus["PROCESSED"] = "PROCESSED";
    WebhookStatus["FAILED"] = "FAILED";
    WebhookStatus["IGNORED"] = "IGNORED";
})(WebhookStatus || (exports.WebhookStatus = WebhookStatus = {}));
//# sourceMappingURL=database.enums.js.map