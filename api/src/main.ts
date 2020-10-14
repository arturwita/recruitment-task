import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const configService: ConfigService = new ConfigService();

    const app = await NestFactory.create(AppModule, {
        cors: configService.get<boolean>('ENABLE_CORS')
    });
    app.useGlobalPipes(new ValidationPipe({transform: true}));


    const options = new DocumentBuilder()
        .setTitle('recruitment-task')
        .setDescription('Auth API with an external API connection.')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);

    await app.listen(
        configService.get<number>('APP_PORT'),
        configService.get<string>('APP_HOST')
    );
}
bootstrap();
