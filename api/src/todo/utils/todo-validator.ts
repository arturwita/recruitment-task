import { todoSchema } from './joi-schemas';

export const validate = (todos) => {
    const validTodos = [];
    todos.forEach(todo => {
        const { error } = todoSchema.validate(todo, {
            allowUnknown: true
        });

        if (!error) validTodos.push(todo);
    });

    return validTodos;
};
