import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Connection } from 'typeorm';

import { config } from 'dotenv';
import Seeder from './database/seeds/default-user.seeder';
config();

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.STAGE === 'dev' ? 3030 : process.env.PORT;

  const config = new DocumentBuilder()
    .setTitle('Avt Wallet API')
    .setDescription('The avt wallet API description')
    .setVersion('1.0')
    .addTag('avt')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();

  //#region Seeder
  const connection = app.get(Connection);
  await connection.synchronize();
  await Seeder.run(connection);
  //#endregion

  logger.log(`Application is running on: http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
