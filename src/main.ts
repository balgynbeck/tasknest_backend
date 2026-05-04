import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser = require("cookie-parser");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle("Task Management API")
    .setDescription("API для работы с досками, задачами и пользователями")
    .setVersion("1.0")
    .addBearerAuth()
    .addCookieAuth("refreshToken")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.enableCors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    credentials: true,
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}

bootstrap().catch((err) => {
  console.error("FATAL ERROR STARTING APP:", err);
  process.exit(1);
});
