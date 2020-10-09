import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Crypto } from './utils/crypto';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

const configService: ConfigService = new ConfigService();


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.example'
        }),
        TypeOrmModule.forFeature([
            User
        ]),
        JwtModule.register({
            secret: configService.get('JWT_SECRET'),
            signOptions: {
                expiresIn: configService.get('TOKEN_EXPIRATION_TIME')
            },
        }),
    ],
    providers: [
        UserService,
        Crypto
    ],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}
