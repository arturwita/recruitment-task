import { TodoDto } from '../../todo/dto/todo-dto';

export const parseTodo = (x: any): TodoDto => {
    const todo: TodoDto = new TodoDto();
    todo.userId = x.userId;
    todo.todoId = x.id;
    todo.completed = x.completed;
    todo.title = x.title;

    return todo;
};
