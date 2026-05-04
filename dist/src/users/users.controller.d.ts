import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("../generated/prisma/models").Prisma__UserClient<{
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
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
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
    })[]>;
    getMe(userId: number): Promise<{
        name: string | null;
        email: string;
        role: import("../generated/prisma/enums").Role;
        tasks: {
            description: string | null;
            title: string;
            id: number;
            createdAt: Date;
            status: import("../generated/prisma/enums").TaskStatus;
            boardId: number;
            userId: number;
        }[];
        id: number;
    }>;
    findOne(id: string): Promise<{
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
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
    }>;
    remove(id: string): Promise<{
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
    }>;
}
