"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.printf(({ level, message, timestamp }) => {
                        return `[${timestamp}] ${level}: ${message}`;
                    })),
                }),
            ],
        }),
    });
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map