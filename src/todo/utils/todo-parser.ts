import { Todo } from '../todo.entity';

export const parseTodo = (todo: any): Todo => {
    const parsedTodo: Todo = new Todo();
    parsedTodo.todoId = todo.id;
    parsedTodo.completed = todo.completed;
    parsedTodo.title = todo.title;

    return parsedTodo;
};
