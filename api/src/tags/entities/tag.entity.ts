import { AbstractClass } from 'src/database/abstractClass/abstracClass.class';
import { Column, Entity } from 'typeorm';

@Entity()
export class Tag extends AbstractClass {
  @Column()
  name: string;
}
