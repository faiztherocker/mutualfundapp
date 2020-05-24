import {
  ErrorHandler,
  IException,
  HttpResult,
  jsonResult,
  HTTP_STATUS_CODE
} from 'fortjs';
import { GENERIC_EXCEPTIONS } from '../generic-exceptions-list/generic-exceptions-list';

export class UncaughtExceptionHandler extends ErrorHandler {
  async onBadRequest(exception: IException): Promise<HttpResult> {
    return jsonResult(
      { error: exception.message },
      HTTP_STATUS_CODE.BadRequest
    );
  }

  async onServerError(exception: IException): Promise<HttpResult> {
    return jsonResult(
      { error: exception.message },
      HTTP_STATUS_CODE.InternalServerError
    );
  }

  async onNotFound(url: string): Promise<HttpResult> {
    return jsonResult(
      { error: GENERIC_EXCEPTIONS.get('PAGE.NOT.FOUND') },
      HTTP_STATUS_CODE.NotFound
    );
  }

  async onMethodNotAllowed(): Promise<HttpResult> {
    return jsonResult(
      { error: GENERIC_EXCEPTIONS.get('METHOD.NOT.ALLOWED') },
      HTTP_STATUS_CODE.MethodNotAllowed
    );
  }

  async onNotAcceptableRequest(): Promise<HttpResult> {
    return jsonResult(
      { error: GENERIC_EXCEPTIONS.get('REQUEST.NOT.ACCEPTABLE') },
      HTTP_STATUS_CODE.MethodNotAllowed
    );
  }
}
