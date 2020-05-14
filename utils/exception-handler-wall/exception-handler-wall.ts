import { Wall, HttpResult, jsonResult, HTTP_STATUS_CODE } from 'fortjs';

export class ExceptioHandlerWall extends Wall {
  onIncoming(): Promise<HttpResult> {
    return null;
  }

  async onOutgoing(...args: any[]): Promise<any> {
    //return jsonResult('Server failed', HTTP_STATUS_CODE.InternalServerError);
    return null;
  }
}
