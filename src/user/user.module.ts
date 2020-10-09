import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Crypto } from './utils/crypto';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.example'
        }),
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [
        UserService,
        Crypto
    ],
    controllers: [UserController],
})
export class UserModule {}
