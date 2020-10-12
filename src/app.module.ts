import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

const configService: ConfigService = new ConfigService();

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: configService.get<string>('DB_HOST'),
            username: configService.get<string>('DB_USER'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
            synchronize: configService.get<boolean>('DB_SYNCHRONIZATION_FLAG'),
            entities: [
                User,
                Todo
            ]
        }),
        UserModule,
        TodoModule,
    ],
})
export class AppModule {}
