import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { config } from 'dotenv';
config();

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Avt Wallet API')
    .setDescription('The avt wallet API description')
    .setVersion('1.0')
    .addTag('avt')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();

  logger.log(`Application is running on: http://localhost:${3000}`);
  await app.listen(3000);
}
bootstrap();
