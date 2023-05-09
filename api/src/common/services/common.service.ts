import { HttpException, Logger } from '@nestjs/common';

export const handleErrors = (message: string, code: number) => {
  const logger = new Logger();
  logger.log(message);

  throw new HttpException(message, code);
};
