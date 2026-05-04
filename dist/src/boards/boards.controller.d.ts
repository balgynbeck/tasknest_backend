import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(createBoardDto: CreateBoardDto): import("../generated/prisma/models").Prisma__BoardClient<{
        title: string;
        id: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        tasks: {
            description: string | null;
            title: string;
            id: number;
            createdAt: Date;
            status: import("../generated/prisma/enums").TaskStatus;
            boardId: number;
            userId: number;
        }[];
    } & {
        title: string;
        id: number;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        tasks: ({
            user: {
                name: string | null;
                email: string;
                password: string;
                role: import("../generated/prisma/enums").Role;
                id: number;
            };
        } & {
            description: string | null;
            title: string;
            id: number;
            createdAt: Date;
            status: import("../generated/prisma/enums").TaskStatus;
            boardId: number;
            userId: number;
        })[];
    } & {
        title: string;
        id: number;
        createdAt: Date;
    }>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<{
        title: string;
        id: number;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        id: number;
        createdAt: Date;
    }>;
}
