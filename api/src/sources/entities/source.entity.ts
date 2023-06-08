import { AbstractClass } from 'src/database/abstractClass/abstracClass.class';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Source extends AbstractClass {
  @Column()
  name: string;

  @OneToMany(() => Revenue, (revenue) => revenue.source)
  revenues: Revenue[];
}
