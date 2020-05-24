import { Guard, HttpResult } from 'fortjs';
import { lazyInject } from '../dependency-injection/dependency-injection';
import { LOGGER_TYPE } from '../dependency-injection/dependency-injection.types';
import { FileLogger } from '../file-logger/file-logger';

export class LoggingGuard extends Guard {
  @lazyInject(LOGGER_TYPE.FileLogger) logger: FileLogger;

  check(...args: any[]): Promise<HttpResult> {
    this.logger.info({
      message: 'Controller hit',
      endpoint: this.request.url,
      verb: this.request.method,
      ip:
        (this.request.headers['x-forwarded-for'] || '')
          .toString()
          .split(',')
          .pop() || this.request.connection.remoteAddress
    });
    return null;
  }
}
