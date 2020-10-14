import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('todos')
export class Todo {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    todoId: number;

    @Column()
    title: string;

    @Column()
    completed: boolean;
}
