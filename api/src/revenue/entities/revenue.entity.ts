import { AbstractClass } from 'src/database/abstractClass/abstracClass.class';
import { Source } from 'src/sources/entities/source.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { payMethod } from '../enum/payMethod';
import { typeRevenue } from '../enum/typeRevenue';

@Entity()
export class Revenue extends AbstractClass {
  @Column()
  name: string;

  @Column()
  coin: number;

  @Column()
  value: number;

  @Column()
  payMethod: payMethod;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  typeRevenue: typeRevenue;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  userId: string;

  @Column()
  @ManyToOne(() => Source, (source) => source.id)
  source: string;

  @Column()
  @ManyToOne(() => Tag, (tag) => tag.id)
  tag: string;
}
