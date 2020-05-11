import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import { FileLogger } from './utils/file-logger/file-logger';

export class App extends Fort {
  constructor() {
    super();
    this.routes = routes;
    this.viewEngine = MustacheViewEngine;
    this.logger = new FileLogger();
  }
}
