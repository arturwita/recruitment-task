import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo-dto';
import { AUTH_HEADER } from '../common/constants/headers';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodos(@Headers(AUTH_HEADER) token: string): Promise<Todo[]> {
        return this.todoService.getTodos();
    }

    @Post()
    async createTodo(@Body() todoDto: TodoDto): Promise<Todo> {
        return this.todoService.createTodo(todoDto);
    }
}
