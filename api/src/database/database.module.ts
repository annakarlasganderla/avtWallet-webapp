import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenue } from 'src/revenue/entities/revenue.entity';
import { Source } from 'src/sources/entities/source.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'avt_db',
      entities: [User, Source, Tag, Revenue],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule { }
