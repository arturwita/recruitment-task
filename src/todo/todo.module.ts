import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { AuthorizationMiddleware } from '../common/middlewares/auth';
import { ExternalClient } from '../common/utils/external-client';

const configService: ConfigService = new ConfigService();


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        TypeOrmModule.forFeature([
            Todo
        ]),
        JwtModule.register({
            secret: configService.get('JWT_SECRET'),
            signOptions: {
                expiresIn: configService.get('TOKEN_EXPIRATION_TIME')
            },
        })
    ],
    providers: [
        TodoService,
        ExternalClient
    ],
    controllers: [TodoController],
    exports: [TodoService]
})
export class TodoModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(AuthorizationMiddleware)
            .forRoutes(TodoController);
    }
}

