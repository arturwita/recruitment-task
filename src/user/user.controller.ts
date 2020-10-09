import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user-dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('/register')
    register(@Body() userDto: UserDto): Promise<User> {
        return this.userService.register(userDto);
    }
}
