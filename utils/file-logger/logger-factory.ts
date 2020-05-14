import { Logger, createLogger, format } from 'winston';
import {
  EnvironmentLogger,
  DevEnvironmentLogger,
  ProdEnvironmentLogger
} from './environment-logger';

export class LoggerFactory {
  private static loggerFactory: LoggerFactory;

  private constructor() {}

  static getLogger() {
    if (!this.loggerFactory) {
      this.loggerFactory = new LoggerFactory();
    }
    return this.loggerFactory;
  }

  getEnvironmentLogger(environment: string): EnvironmentLogger {
    if (environment === 'development') {
      return new DevEnvironmentLogger();
    } else if (environment === 'production') {
      return new ProdEnvironmentLogger();
    }
  }
}
