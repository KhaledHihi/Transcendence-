"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toResponse(user) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
            appRole: user.appRole,
            status: user.status,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map