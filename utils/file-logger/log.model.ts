import { HTTP_METHOD } from 'fortjs';

export class Log {
  message: string;
  endpoint?: string;
  verb?: HTTP_METHOD;
  ip?: string;
  extra?: {};

  constructor({ ...log }: Log) {
    this.message = log.message;
    this.endpoint = log.endpoint;
    this.verb = log.verb;
    this.extra = log.extra;
  }
}
