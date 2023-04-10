import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, DatabaseModule],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
