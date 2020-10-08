import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: true })
    );
    const configService: ConfigService = new ConfigService();

    await app.listen(
        configService.get<number>('PORT'),
        configService.get<string>('HOST')
    );
}
bootstrap();
