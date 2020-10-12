import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { parseTodo } from '../common/constants/functions';
import { ExternalClient } from '../common/utils/external-client';
import { OPERATION_SUCCESS } from '../common/constants/responses';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,

        @Inject(ExternalClient)
        private readonly externalClient: ExternalClient
    ) {}

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.find();
    }

    async downloadTodos(): Promise<any> {
        const URL = 'https://jsonplaceholder.typicode.com/todos';
        const arr = await this.externalClient.downloadData(URL);

        arr
            .map(parseTodo)
            .forEach((item) => {
                this.todoRepository.save(item);
            });

        return OPERATION_SUCCESS;
    }
}
