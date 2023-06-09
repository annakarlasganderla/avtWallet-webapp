import { HttpException, Logger } from '@nestjs/common';

export const handleErrors = (message: string, code: number) => {
  const logger = new Logger();
  logger.error(message);

  throw new HttpException(message, code);
};
