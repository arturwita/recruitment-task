import { Controller, Get, Headers } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { AUTH_HEADER } from '../common/constants/headers';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodos(@Headers(AUTH_HEADER) token: string): Promise<Todo[]> {
        return this.todoService.getTodos();
    }

    @Get('download')
    async downloadTodos(): Promise<any> {
        return this.todoService.downloadTodos();
    }
}
