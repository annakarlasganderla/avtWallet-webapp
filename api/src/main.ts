import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { User } from './users/entities/user.entity';

async function bootstrap() {
  const logger = new Logger(User.name);
  const app = await NestFactory.create(AppModule);
  logger.log("aa");
  await app.listen(3001);
}
bootstrap();
