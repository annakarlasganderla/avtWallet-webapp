import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Source } from 'src/sources/entities/source.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: '172.25.0.4',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Source, Tag],
      synchronize: true, // A configuração synchronize: true não deve ser usada na produção - caso contrário, você pode perder dados de produção. (peguei da documentaçãp)
    }),
  ],
})
export class DatabaseModule { }
