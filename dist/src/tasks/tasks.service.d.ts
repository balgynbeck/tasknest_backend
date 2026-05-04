import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from '../generated/prisma/enums';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto, userId: number): import("../generated/prisma/models").Prisma__TaskClient<{
        board: {
            title: string;
            id: number;
            createdAt: Date;
        };
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
        status: TaskStatus;
        boardId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(status?: TaskStatus): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        board: {
            title: string;
            id: number;
            createdAt: Date;
        };
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
        status: TaskStatus;
        boardId: number;
        userId: number;
    })[]>;
    findOne(id: number): Promise<{
        board: {
            title: string;
            id: number;
            createdAt: Date;
        };
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
        status: TaskStatus;
        boardId: number;
        userId: number;
    }>;
    update(id: number, updateTaskDto: UpdateTaskDto, userId: number, userRole: string): Promise<{
        board: {
            title: string;
            id: number;
            createdAt: Date;
        };
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
        status: TaskStatus;
        boardId: number;
        userId: number;
    }>;
    remove(id: number, userId: number, userRole: string): Promise<{
        description: string | null;
        title: string;
        id: number;
        createdAt: Date;
        status: TaskStatus;
        boardId: number;
        userId: number;
    }>;
}
