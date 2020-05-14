import { ErrorHandler, IException } from 'fortjs';

export class UncaughtExceptionHandler extends ErrorHandler {
  async onBadRequest(exception: IException) {
    return exception.message + 'Hey there';
  }

  async onServerError(exception: IException) {
    return exception.stack;
  }
}
