"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Task Management API")
        .setDescription("API для работы с досками, задачами и пользователями")
        .setVersion("1.0")
        .addTag("Boards", "Эндпоинты для работы с досками")
        .addTag("Tasks", "Эндпоинты для работы с задачами")
        .addTag("Users", "Эндпоинты для работы с пользователями")
        .addTag("Auth", "Аутентификация и авторизация")
        .addBearerAuth()
        .addCookieAuth("refreshToken")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.enableCors({
        origin: process.env.FRONTEND_URL || "http://localhost:3001",
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map