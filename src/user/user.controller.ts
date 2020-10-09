import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
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

    @HttpCode(200)
    @Post('login')
    async login(@Body() userDto: UserDto): Promise<any> {
        return this.userService.login(userDto);
    }
}
