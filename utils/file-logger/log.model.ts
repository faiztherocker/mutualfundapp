export class Log {
  message: string;
  endpoint?: string;
  verb?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  extra?: {};

  constructor({ ...log }: Log) {
    this.message = log.message;
    this.endpoint = log.endpoint;
    this.verb = log.verb;
    this.extra = log.extra;
  }
}
