import { HttpException, Logger } from '@nestjs/common';

export const handleErrors = (message: string) => {
  const logger = new Logger();
  logger.log(message);

  throw new HttpException(message, 500);
};
