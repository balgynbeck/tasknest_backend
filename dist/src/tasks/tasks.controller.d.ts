import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from '../generated/prisma/enums';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateTaskDto: UpdateTaskDto, userId: number, userRole: string): Promise<{
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
    remove(id: string, userId: number, userRole: string): Promise<{
        description: string | null;
        title: string;
        id: number;
        createdAt: Date;
        status: TaskStatus;
        boardId: number;
        userId: number;
    }>;
}
