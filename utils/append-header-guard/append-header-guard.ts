import { Guard, HttpResult } from 'fortjs';

export class AppendHeaderGuard extends Guard {
  async check(...args: any[]): Promise<HttpResult> {
    this.response.setHeader('content-type', 'application/json; charset=utf-8');
    this.response.setHeader('connection', 'keep-aive');
    this.response.setHeader('cache-control', 'no-store, no-cache, private');
    this.response.setHeader('access-control-allow-origin', '*');
    this.response.setHeader('X-XSS-Protection', '1; mode=block');
    return null;
  }
}
