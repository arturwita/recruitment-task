import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async register(userDto: UserDto): Promise<User> {
        const userExists = await this.userRepository.findOne({login: userDto.login});
        if (userExists) throw new BadRequestException();

        const password = await this.crypto.hashPassword(userDto.password);
        const user = { login: userDto.login, password };

        return await this.userRepository.save(user)
    }
}
