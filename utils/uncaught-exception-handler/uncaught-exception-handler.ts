import {
  ErrorHandler,
  IException
} from 'fortjs';
import { GENERIC_EXCEPTIONS } from '../generic-exceptions-list/generic-exceptions-list';

export class UncaughtExceptionHandler extends ErrorHandler {
  async onBadRequest(exception: IException) {
    return exception.message;
  }

  async onServerError(exception: IException) {
    return exception.message;
  }

  async onNotFound(url: string): Promise<string> {
    return GENERIC_EXCEPTIONS.get('PAGE.NOT.FOUND');
  }

  async onMethodNotAllowed() {
    return GENERIC_EXCEPTIONS.get('METHOD.NOT.ALLOWED');
  }

  async onNotAcceptableRequest() {
    return GENERIC_EXCEPTIONS.get('METHOD.NOT.ALLOWED');
  }
}
