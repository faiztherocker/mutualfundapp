import { Wall, HttpResult, jsonResult, HTTP_STATUS_CODE } from 'fortjs';

export class AppendHeaderWall extends Wall {
  onIncoming(): Promise<HttpResult | void> {
    return null;
  }

  async onOutgoing(finalResult: HttpResult, ...args: any[]): Promise<any> {
    this.response.setHeader('content-type', 'application/json; charset=utf-8');
    this.response.setHeader('connection', 'keep-aive');
    this.response.setHeader('cache-control', 'no-store, no-cache, private');
    this.response.setHeader('X-XSS-Protection', '1; mode=block');
    return null;
  }
}
