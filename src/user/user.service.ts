import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user-dto';
import { Crypto } from './utils/crypto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @Inject(Crypto)
        private readonly crypto: Crypto,
    ) {}

    async register(userDto: UserDto): Promise<User> {
        const userExists = await this.userRepository.findOne({login: userDto.login});
        if (userExists) throw new BadRequestException();

        const password = await this.crypto.hashPassword(userDto.password);
        const user = { login: userDto.login, password };

        return await this.userRepository.save(user)
    }

    async login(userDto: UserDto): Promise<string> {
        const user = await this.userRepository.findOne({login: userDto.login});
        if (!user) throw new UnauthorizedException();

        const passwordsMatch = await this.crypto.comparePasswords(userDto.password, user.password);
        if (!passwordsMatch) throw new UnauthorizedException();

        const { password, ...payload } = user;

        return await this.crypto.generateToken(payload);
    }
}
