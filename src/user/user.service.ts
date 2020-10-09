import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async register(userDto: UserDto): Promise<User> {
        const userExists = await this.userRepository.findOne({login: userDto.login});
        if (userExists) throw new BadRequestException();

        // hash password

        return await this.userRepository.save(userDto)
    }
}
