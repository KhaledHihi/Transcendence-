export declare enum AppRole {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED"
}
export declare enum InvitationStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED"
}
export declare enum FriendshipStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED"
}
export declare enum TaskStatus {
    BACKLOG = "BACKLOG",
    READY = "READY",
    IN_PROGRESS = "IN_PROGRESS",
    REVIEW = "REVIEW",
    DONE = "DONE",
    CANCELLED = "CANCELLED"
}
export declare enum TaskPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    URGENT = "URGENT"
}
export declare enum GitHubAccountType {
    USER = "USER",
    ORGANIZATION = "ORGANIZATION"
}
export declare enum GitHubInstallationStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
export declare enum RepositoryVisibility {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    INTERNAL = "INTERNAL"
}
export declare enum RepositoryEntryType {
    FILE = "FILE",
    DIRECTORY = "DIRECTORY",
    SYMLINK = "SYMLINK",
    SUBMODULE = "SUBMODULE"
}
export declare enum TaskRepositoryLinkType {
    REPOSITORY = "REPOSITORY",
    BRANCH = "BRANCH",
    FILE = "FILE",
    COMMIT = "COMMIT"
}
export declare enum WebhookStatus {
    RECEIVED = "RECEIVED",
    PROCESSING = "PROCESSING",
    PROCESSED = "PROCESSED",
    FAILED = "FAILED",
    IGNORED = "IGNORED"
}
