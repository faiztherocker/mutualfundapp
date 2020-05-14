import { createLogger, format, transports, Logger } from 'winston';
import 'winston-daily-rotate-file';
import { injectable } from 'inversify';
import { Log } from './log.model';
import { LOG_CONFIG } from './log.config';

@injectable()
export class FileLogger {
  private _logger: Logger;

  constructor() {
    this.initWinstonLogger();
  }

  private initWinstonLogger() {
    this._logger = createLogger({
      exitOnError: false,
      format: format.combine(format.timestamp(), format.prettyPrint())
    });

    if (process.env.NODE_ENV !== 'production') {
      this._logger.add(new transports.Console());
    } else {
      this._logger.add(new transports.DailyRotateFile(LOG_CONFIG.error));
      this._logger.add(new transports.DailyRotateFile(LOG_CONFIG.info));
    }
  }

  info(log: Log) {
    this._logger.info({ ...log });
  }
  error(log: Log) {
    this._logger.error({ ...log });
  }
  debug(log: Log) {
    this._logger.debug({ ...log });
  }
}
