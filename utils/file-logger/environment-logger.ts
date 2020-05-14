import { Logger, transports, createLogger, format } from 'winston';
import { LOG_CONFIG } from './log.config';

export class EnvironmentLogger {
  logger: Logger;
  constructor() {
    this.logger = createLogger({
      exitOnError: false,
      format: format.combine(format.timestamp(), format.prettyPrint())
    });
  }
}

export class DevEnvironmentLogger extends EnvironmentLogger {
  constructor() {
    super();
    this.logger.add(new transports.Console());
  }
}

export class ProdEnvironmentLogger extends EnvironmentLogger {
  constructor() {
    super();
    this.logger.add(new transports.DailyRotateFile(LOG_CONFIG.error));
    this.logger.add(new transports.DailyRotateFile(LOG_CONFIG.info));
  }
}
