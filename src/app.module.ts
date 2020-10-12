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
            database: configService.get<string>('DB_NAME'),
            entities: [
                User,
                Todo
            ],
            synchronize: true,
        }),
        UserModule,
        TodoModule,
    ],
})
export class AppModule {}
