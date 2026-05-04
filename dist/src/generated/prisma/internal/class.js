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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.5.0",
    "engineVersion": "280c870be64f457428992c43c1f6d557fab6e29e",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Board {\n  id        Int      @id @default(autoincrement())\n  title     String\n  createdAt DateTime @default(now())\n  tasks     Task[]\n}\n\nenum Role {\n  USER\n  ADMIN\n}\n\nmodel User {\n  id       Int     @id @default(autoincrement())\n  name     String?\n  email    String  @unique\n  password String\n  role     Role    @default(USER)\n  tasks    Task[]\n}\n\nenum TaskStatus {\n  todo\n  in_progress\n  done\n}\n\nmodel Task {\n  id          Int        @id @default(autoincrement())\n  title       String\n  description String?\n  status      TaskStatus @default(todo)\n  boardId     Int\n  board       Board      @relation(fields: [boardId], references: [id], onDelete: Cascade)\n  userId      Int\n  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  createdAt   DateTime   @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Board\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"tasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"BoardToTask\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"tasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"TaskToUser\"}],\"dbName\":null},\"Task\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"TaskStatus\"},{\"name\":\"boardId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"board\",\"kind\":\"object\",\"type\":\"Board\",\"relationName\":\"BoardToTask\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TaskToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"board\",\"tasks\",\"_count\",\"user\",\"Board.findUnique\",\"Board.findUniqueOrThrow\",\"Board.findFirst\",\"Board.findFirstOrThrow\",\"Board.findMany\",\"data\",\"Board.createOne\",\"Board.createMany\",\"Board.createManyAndReturn\",\"Board.updateOne\",\"Board.updateMany\",\"Board.updateManyAndReturn\",\"create\",\"update\",\"Board.upsertOne\",\"Board.deleteOne\",\"Board.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Board.groupBy\",\"Board.aggregate\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"User.groupBy\",\"User.aggregate\",\"Task.findUnique\",\"Task.findUniqueOrThrow\",\"Task.findFirst\",\"Task.findFirstOrThrow\",\"Task.findMany\",\"Task.createOne\",\"Task.createMany\",\"Task.createManyAndReturn\",\"Task.updateOne\",\"Task.updateMany\",\"Task.updateManyAndReturn\",\"Task.upsertOne\",\"Task.deleteOne\",\"Task.deleteMany\",\"Task.groupBy\",\"Task.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"description\",\"TaskStatus\",\"status\",\"boardId\",\"userId\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"name\",\"email\",\"password\",\"Role\",\"role\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "tAEhMAcEAABrACA_AABtADBAAAALABBBAABtADBCAgAAAAFDAQBpACFJQABuACEBAAAAAQAgDAMAAHEAIAYAAHIAID8AAG8AMEAAAAMAEEEAAG8AMEICAGcAIUMBAGkAIUQBAGgAIUYAAHBGIkcCAGcAIUgCAGcAIUlAAG4AIQMDAACnAQAgBgAAqAEAIEQAAHMAIAwDAABxACAGAAByACA_AABvADBAAAADABBBAABvADBCAgAAAAFDAQBpACFEAQBoACFGAABwRiJHAgBnACFIAgBnACFJQABuACEDAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAADACABAAAAAwAgAQAAAAEAIAcEAABrACA_AABtADBAAAALABBBAABtADBCAgBnACFDAQBpACFJQABuACEBBAAAlgEAIAMAAAALACABAAAMADACAAABACADAAAACwAgAQAADAAwAgAAAQAgAwAAAAsAIAEAAAwAMAIAAAEAIAQEAACmAQAgQgIAAAABQwEAAAABSUAAAAABAQwAABAAIANCAgAAAAFDAQAAAAFJQAAAAAEBDAAAEgAwAQwAABIAMAQEAACcAQAgQgIAfQAhQwEAeQAhSUAAfAAhAgAAAAEAIAwAABUAIANCAgB9ACFDAQB5ACFJQAB8ACECAAAACwAgDAAAFwAgAgAAAAsAIAwAABcAIAMAAAABACATAAAQACAUAAAVACABAAAAAQAgAQAAAAsAIAUFAACXAQAgGQAAmAEAIBoAAJsBACAbAACaAQAgHAAAmQEAIAY_AABsADBAAAAeABBBAABsADBCAgBRACFDAQBSACFJQABVACEDAAAACwAgAQAAHQAwGAAAHgAgAwAAAAsAIAEAAAwAMAIAAAEAIAkEAABrACA_AABmADBAAAAkABBBAABmADBCAgAAAAFVAQBoACFWAQAAAAFXAQBpACFZAABqWSIBAAAAIQAgAQAAACEAIAkEAABrACA_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_AABmADBAAAAkABBBAABmADBCAgBnACFVAQBoACFWAQBpACFXAQBpACFZAABqWSIISgIAAAABSwIAAAAETAIAAAAETQIAAAABTgIAAAABTwIAAAABUAIAAAABUQIAVwAhC0oBAAAAAUsBAAAABUwBAAAABU0BAAAAAU4BAAAAAU8BAAAAAVABAAAAAVEBAF0AIVIBAAAAAVMBAAAAAVQBAAAAAQtKAQAAAAFLAQAAAARMAQAAAARNAQAAAAFOAQAAAAFPAQAAAAFQAQAAAAFRAQBfACFSAQAAAAFTAQAAAAFUAQAAAAEESgAAAFkCSwAAAFkITAAAAFkIUQAAZVkiA1oAAAMAIFsAAAMAIFwAAAMAIAY_AABsADBAAAAeABBBAABsADBCAgBRACFDAQBSACFJQABVACEHBAAAawAgPwAAbQAwQAAACwAQQQAAbQAwQgIAZwAhQwEAaQAhSUAAbgAhCEpAAAAAAUtAAAAABExAAAAABE1AAAAAAU5AAAAAAU9AAAAAAVBAAAAAAVFAAFgAIQwDAABxACAGAAByACA_AABvADBAAAADABBBAABvADBCAgBnACFDAQBpACFEAQBoACFGAABwRiJHAgBnACFIAgBnACFJQABuACEESgAAAEYCSwAAAEYITAAAAEYIUQAAWkYiCQQAAGsAID8AAG0AMEAAAAsAEEEAAG0AMEICAGcAIUMBAGkAIUlAAG4AIV0AAAsAIF4AAAsAIAsEAABrACA_AABmADBAAAAkABBBAABmADBCAgBnACFVAQBoACFWAQBpACFXAQBpACFZAABqWSJdAAAkACBeAAAkACAAAAAAAAABYgEAAAABAWIBAAAAAQFiAAAARgIBYkAAAAABBWICAAAAAWgCAAAAAWkCAAAAAWoCAAAAAWsCAAAAAQUTAACtAQAgFAAAswEAIF8AAK4BACBgAACyAQAgZQAAAQAgBRMAAKsBACAUAACwAQAgXwAArAEAIGAAAK8BACBlAAAhACADEwAArQEAIF8AAK4BACBlAAABACADEwAAqwEAIF8AAKwBACBlAAAhACAAAAAAAAFiAAAAWQILEwAAiQEAMBQAAI4BADBfAACKAQAwYAAAiwEAMGEAAIwBACBiAACNAQAwYwAAjQEAMGQAAI0BADBlAACNAQAwZgAAjwEAMGcAAJABADAHAwAAgAEAIEICAAAAAUMBAAAAAUQBAAAAAUYAAABGAkcCAAAAAUlAAAAAAQIAAAAFACATAACUAQAgAwAAAAUAIBMAAJQBACAUAACTAQAgAQwAAKoBADAMAwAAcQAgBgAAcgAgPwAAbwAwQAAAAwAQQQAAbwAwQgIAAAABQwEAaQAhRAEAaAAhRgAAcEYiRwIAZwAhSAIAZwAhSUAAbgAhAgAAAAUAIAwAAJMBACACAAAAkQEAIAwAAJIBACAKPwAAkAEAMEAAAJEBABBBAACQAQAwQgIAZwAhQwEAaQAhRAEAaAAhRgAAcEYiRwIAZwAhSAIAZwAhSUAAbgAhCj8AAJABADBAAACRAQAQQQAAkAEAMEICAGcAIUMBAGkAIUQBAGgAIUYAAHBGIkcCAGcAIUgCAGcAIUlAAG4AIQZCAgB9ACFDAQB5ACFEAQB6ACFGAAB7RiJHAgB9ACFJQAB8ACEHAwAAfgAgQgIAfQAhQwEAeQAhRAEAegAhRgAAe0YiRwIAfQAhSUAAfAAhBwMAAIABACBCAgAAAAFDAQAAAAFEAQAAAAFGAAAARgJHAgAAAAFJQAAAAAEEEwAAiQEAMF8AAIoBADBhAACMAQAgZQAAjQEAMAAAAAAAAAsTAACdAQAwFAAAoQEAMF8AAJ4BADBgAACfAQAwYQAAoAEAIGIAAI0BADBjAACNAQAwZAAAjQEAMGUAAI0BADBmAACiAQAwZwAAkAEAMAcGAACBAQAgQgIAAAABQwEAAAABRAEAAAABRgAAAEYCSAIAAAABSUAAAAABAgAAAAUAIBMAAKUBACADAAAABQAgEwAApQEAIBQAAKQBACABDAAAqQEAMAIAAAAFACAMAACkAQAgAgAAAJEBACAMAACjAQAgBkICAH0AIUMBAHkAIUQBAHoAIUYAAHtGIkgCAH0AIUlAAHwAIQcGAAB_ACBCAgB9ACFDAQB5ACFEAQB6ACFGAAB7RiJIAgB9ACFJQAB8ACEHBgAAgQEAIEICAAAAAUMBAAAAAUQBAAAAAUYAAABGAkgCAAAAAUlAAAAAAQQTAACdAQAwXwAAngEAMGEAAKABACBlAACNAQAwAQQAAJYBACACBAAAlgEAIFUAAHMAIAZCAgAAAAFDAQAAAAFEAQAAAAFGAAAARgJIAgAAAAFJQAAAAAEGQgIAAAABQwEAAAABRAEAAAABRgAAAEYCRwIAAAABSUAAAAABBUICAAAAAVUBAAAAAVYBAAAAAVcBAAAAAVkAAABZAgIAAAAhACATAACrAQAgA0ICAAAAAUMBAAAAAUlAAAAAAQIAAAABACATAACtAQAgAwAAACQAIBMAAKsBACAUAACxAQAgBwAAACQAIAwAALEBACBCAgB9ACFVAQB6ACFWAQB5ACFXAQB5ACFZAACHAVkiBUICAH0AIVUBAHoAIVYBAHkAIVcBAHkAIVkAAIcBWSIDAAAACwAgEwAArQEAIBQAALQBACAFAAAACwAgDAAAtAEAIEICAH0AIUMBAHkAIUlAAHwAIQNCAgB9ACFDAQB5ACFJQAB8ACECBAYCBQAFAgMAAQYAAwIEBwIFAAQBBAgAAQQJAAAAAAUFAAoZAAsaAAwbAA0cAA4AAAAAAAUFAAoZAAsaAAwbAA0cAA4AAAUFABMZABQaABUbABYcABcAAAAAAAUFABMZABQaABUbABYcABcCAwABBgADAgMAAQYAAwUFABwZAB0aAB4bAB8cACAAAAAAAAUFABwZAB0aAB4bAB8cACAHAgEICgEJDQEKDgELDwENEQEOEwYPFAcQFgERGAYSGQgVGgEWGwEXHAYdHwkeIA8fIgMgIwMhJgMiJwMjKAMkKgMlLAYmLRAnLwMoMQYpMhEqMwMrNAMsNQYtOBIuORgvOgIwOwIxPAIyPQIzPgI0QAI1QgY2Qxk3RQI4RwY5SBo6SQI7SgI8SwY9Ths-TyE"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map