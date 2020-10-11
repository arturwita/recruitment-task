import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo-dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {}

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async createTodo(todoDto: TodoDto): Promise<Todo> {
        return null;
    }
}
