import { AbstractClass } from 'src/database/abstractClass/abstracClass.class';
import { Column, Entity } from 'typeorm';

@Entity()
export class Source extends AbstractClass {
  @Column()
  name: string;
}
