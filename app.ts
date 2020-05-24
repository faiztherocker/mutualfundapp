import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';

import { UncaughtExceptionHandler } from './utils/uncaught-exception-handler/uncaught-exception-handler';
import { HelmetWall } from './utils/helmet-wall/helmet-wall';
import { AppendHeaderWall } from './utils/append-header-wall/append-header-wall';

export class App extends Fort {
  constructor() {
    super();
    this.routes = routes;
    this.viewEngine = MustacheViewEngine;
    this.walls = [HelmetWall, AppendHeaderWall];
    this.errorHandler = UncaughtExceptionHandler;
  }
}
