import { AbstractClass } from 'src/database/abstractClass/abstracClass.class';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Entity, Column, OneToMany } from 'typeorm';

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

  @OneToMany(() => Revenue, (revenue) => revenue.user)
  revenues: Revenue[];
}
