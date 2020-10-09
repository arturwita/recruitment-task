import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: true })
    );

    app.useGlobalPipes(new ValidationPipe({transform: true}));

    const configService: ConfigService = new ConfigService();

    await app.listen(
        configService.get<number>('APP_PORT'),
        configService.get<string>('APP_HOST')
    );
}
bootstrap();
