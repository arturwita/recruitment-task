import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({transform: true}));

    const configService: ConfigService = new ConfigService();

    await app.listen(
        configService.get<number>('APP_PORT'),
        configService.get<string>('APP_HOST')
    );
}
bootstrap();
