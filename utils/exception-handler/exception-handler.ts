import { ErrorHandler, IException } from 'fortjs';

export class ExceptionHandler extends ErrorHandler {
  async onBadRequest(exception: IException) {
    return exception.message + 'Hey there';
  }

  async onServerError(exception: IException) {
    return exception.message;
  }
}
