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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const argon2 = __importStar(require("argon2"));
const prisma_service_1 = require("../prisma/prisma.service");
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN ?? 'localhost';
const REFRESH_TOKEN_EXPIRY_DAYS = 7;
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async register(dto, res) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.BadRequestException('User with this email already exists');
        }
        const hashedPassword = await argon2.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                name: dto.name,
                password: hashedPassword,
            },
        });
        const tokens = this.generateTokens({ sub: user.id, email: user.email });
        this.setRefreshCookie(res, tokens.refreshToken);
        this.setAccessCookie(res, tokens.accessToken);
        return { accessToken: tokens.accessToken };
    }
    async login(dto, res) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
            select: { id: true, email: true, password: true, role: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const passwordValid = await argon2.verify(user.password, dto.password);
        if (!passwordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const tokens = this.generateTokens({ sub: user.id, email: user.email, role: user.role });
        this.setRefreshCookie(res, tokens.refreshToken);
        this.setAccessCookie(res, tokens.accessToken);
        return { accessToken: tokens.accessToken };
    }
    async refresh(refreshToken, res) {
        if (!refreshToken) {
            throw new common_1.UnauthorizedException('Refresh token not found');
        }
        let payload;
        try {
            payload = this.jwt.verify(refreshToken, {
                secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const tokens = this.generateTokens({ sub: user.id, email: user.email });
        this.setRefreshCookie(res, tokens.refreshToken);
        return { accessToken: tokens.accessToken };
    }
    logout(res) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            domain: COOKIE_DOMAIN,
            secure: true,
            sameSite: 'none',
        });
        return { message: 'Successfully logged out' };
    }
    generateTokens(payload) {
        const accessToken = this.jwt.sign(payload, {
            secret: process.env.JWT_ACCESS_SECRET ?? 'access-secret',
            expiresIn: '15m',
        });
        const refreshToken = this.jwt.sign(payload, {
            secret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
            expiresIn: `${REFRESH_TOKEN_EXPIRY_DAYS}d`,
        });
        return { accessToken, refreshToken };
    }
    setRefreshCookie(res, token) {
        const expires = new Date();
        expires.setDate(expires.getDate() + REFRESH_TOKEN_EXPIRY_DAYS);
        res.cookie('refreshToken', token, {
            httpOnly: true,
            expires,
            domain: COOKIE_DOMAIN,
            secure: true,
            sameSite: 'none',
        });
    }
    setAccessCookie(res, token) {
        res.cookie('accessToken', token, {
            httpOnly: false,
            sameSite: 'lax',
            secure: false,
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map