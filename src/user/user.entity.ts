import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    login: string;

    @Column()
    password: string;
}
