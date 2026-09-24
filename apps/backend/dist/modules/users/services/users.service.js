"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const argon2 = __importStar(require("argon2"));
const node_crypto_1 = require("node:crypto");
const typeorm_2 = require("typeorm");
const database_enums_1 = require("../../../database/enums/database.enums");
const user_entity_1 = require("../entities/user.entity");
const user_mapper_1 = require("../mappers/user.mapper");
function isDuplicateError(error) {
    if (!(error instanceof typeorm_2.QueryFailedError)) {
        return false;
    }
    const driverError = error.driverError;
    return driverError.code === 'ER_DUP_ENTRY';
}
let UsersService = class UsersService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findById(id) {
        const user = await this.usersRepository.findOneBy({
            id,
            deletedAt: (0, typeorm_2.IsNull)(),
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user_mapper_1.UserMapper.toResponse(user);
    }
    findByEmail(email) {
        return this.usersRepository.findOneBy({
            email,
            deletedAt: (0, typeorm_2.IsNull)(),
        });
    }
    findByUsername(username) {
        return this.usersRepository.findOneBy({
            username,
            deletedAt: (0, typeorm_2.IsNull)(),
        });
    }
    async create(createUserDto) {
        const existingUser = await this.usersRepository.findOne({
            where: [
                { username: createUserDto.username },
                { email: createUserDto.email },
            ],
        });
        if (existingUser) {
            throw new common_1.ConflictException('Username or email already exists');
        }
        const passwordHash = await argon2.hash(createUserDto.password);
        const now = new Date();
        const user = this.usersRepository.create({
            id: (0, node_crypto_1.randomUUID)(),
            username: createUserDto.username,
            email: createUserDto.email,
            passwordHash,
            avatarUrl: null,
            appRole: database_enums_1.AppRole.USER,
            status: database_enums_1.UserStatus.ACTIVE,
            lastSeenAt: null,
            createdAt: now,
            updatedAt: now,
            deletedAt: null,
        });
        try {
            const savedUser = await this.usersRepository.save(user);
            return user_mapper_1.UserMapper.toResponse(savedUser);
        }
        catch (error) {
            if (isDuplicateError(error)) {
                throw new common_1.ConflictException('Username or email already exists');
            }
            throw error;
        }
    }
    async updateProfile(id, dto) {
        const user = await this.usersRepository.findOneBy({
            id,
            deletedAt: (0, typeorm_2.IsNull)(),
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (dto.username === undefined &&
            dto.email === undefined &&
            dto.avatarUrl === undefined) {
            throw new common_1.BadRequestException('No changes provided');
        }
        if (dto.username === null || dto.email === null) {
            throw new common_1.BadRequestException('Username and email cannot be null');
        }
        if (dto.username !== undefined && dto.username !== user.username) {
            if (await this.usersRepository.existsBy({ username: dto.username })) {
                throw new common_1.ConflictException('Username already exists');
            }
            user.username = dto.username;
        }
        if (dto.email !== undefined && dto.email !== user.email) {
            if (await this.usersRepository.existsBy({ email: dto.email })) {
                throw new common_1.ConflictException('Email already exists');
            }
            user.email = dto.email;
        }
        if (dto.avatarUrl !== undefined) {
            user.avatarUrl = dto.avatarUrl;
        }
        user.updatedAt = new Date();
        try {
            return user_mapper_1.UserMapper.toResponse(await this.usersRepository.save(user));
        }
        catch (error) {
            if (isDuplicateError(error)) {
                throw new common_1.ConflictException('Username or email already exists');
            }
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map