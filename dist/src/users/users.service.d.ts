import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    getMe(id: number): Promise<{
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
    findOne(id: number): Promise<{
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
    findByEmail(email: string): import("../generated/prisma/models").Prisma__UserClient<{
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string | null;
        email: string;
        password: string;
        role: import("../generated/prisma/enums").Role;
        id: number;
    }>;
}
