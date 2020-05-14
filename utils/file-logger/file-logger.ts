import 'winston-daily-rotate-file';
import { injectable } from 'inversify';
import { Log } from './log.model';
import { LoggerFactory } from './logger-factory';
import { EnvironmentLogger } from './environment-logger';

@injectable()
export class FileLogger {
  private _logger: EnvironmentLogger;

  constructor() {
    this._logger = LoggerFactory.getLogger().getEnvironmentLogger(
      process.env.NODE_ENV
    );
  }

  info(log: Log) {
    this._logger.logger.info({ ...log });
  }
  error(log: Log) {
    this._logger.logger.error({ ...log });
  }
  debug(log: Log) {
    this._logger.logger.debug({ ...log });
  }
}
