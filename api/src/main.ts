import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Connection } from 'typeorm';
import { config } from 'dotenv';
import Seeder from './database/seeds/default-seeder.seeder';
config();

import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });
  const PORT = process.env.PORT;

  app.use(
    ['/docs', '/docs-json'],
    basicAuth({
      challenge: true,
      users: {
        ['root']: 'root',
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Avt Wallet API')
    .setDescription('The avt wallet API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({ origin: 'http://localhost:3000' });

  //Seeder
  const connection = app.get(Connection);
  await connection.synchronize();
  await Seeder.run(connection);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  logger.debug(`Application is running on: http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
