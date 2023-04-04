import { AbstractClass } from 'src/database/abstractClass/abstracClass.class';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends AbstractClass {
    
    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    login: string;
}
