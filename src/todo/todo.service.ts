import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { parseTodo } from './utils/todo-parser';
import { HttpClient } from '../common/utils/http-client';
import { OPERATION_SUCCESS } from '../common/constants/responses';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,

        @Inject(HttpClient)
        private readonly httpClient: HttpClient
    ) {}

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async downloadTodos(): Promise<any> {
        const URL = 'https://jsonplaceholder.typicode.com/todos';
        const unparsedTodos = await this.httpClient.downloadData(URL);

        await unparsedTodos
            .map(parseTodo)
            .forEach((todo) => {
                this.todoRepository.save(todo);
            });

        return OPERATION_SUCCESS;
    }
}
