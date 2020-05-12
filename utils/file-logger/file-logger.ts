import { Logger } from 'fortjs';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.DailyRotateFile({
      datePattern: `DD-MM-YYYY`,
      filename: `logs/error.log`,
      level: `error`
    }),
    new transports.DailyRotateFile({
      datePattern: `DD-MM-YYYY`,
      filename: `logs/all.log`,
      level: `info`
    })
  ]
});

export class FileLogger extends Logger {
  info(message: string) {
    logger.info(message);
  }
  error(message: string) {
    logger.error(message);
  }
  debug(message: string) {
    logger.debug(message);
  }
  log(logLevel, message: string) {
    logger.log(logLevel, message);
  }
}
