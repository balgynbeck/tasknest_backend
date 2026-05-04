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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BoardsService = class BoardsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createBoardDto) {
        return this.prisma.board.create({ data: createBoardDto });
    }
    findAll() {
        return this.prisma.board.findMany({ include: { tasks: true } });
    }
    async findOne(id) {
        const board = await this.prisma.board.findUnique({
            where: { id },
            include: { tasks: { include: { user: true } } },
        });
        if (!board)
            throw new common_1.NotFoundException(`Board #${id} not found`);
        return board;
    }
    async update(id, updateBoardDto) {
        await this.findOne(id);
        return this.prisma.board.update({ where: { id }, data: updateBoardDto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.board.delete({ where: { id } });
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BoardsService);
//# sourceMappingURL=boards.service.js.map