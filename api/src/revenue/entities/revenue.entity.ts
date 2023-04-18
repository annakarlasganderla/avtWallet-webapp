import { AbstractClass } from "src/database/abstractClass/abstracClass.class";
import { Column, Entity } from "typeorm";

@Entity()
export class Revenue extends AbstractClass {
    @Column()
    name: string;

    @Column()
    coin: number;

    @Column()
    value: number;

    @Column()
    payMethod: string;

    @Column()
    date: Date;

    @Column()
    description: string;

    @Column()
    typeRevenue: string;

    @Column()
    userId: string;

    @Column()
    source: string;

    @Column()
    tag: string;
}
