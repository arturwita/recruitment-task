import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user-dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    register(@Body() userDto: UserDto): Promise<User> {
        return this.userService.register(userDto);
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() userDto: UserDto): Promise<string> {
        return this.userService.login(userDto);
    }
}
