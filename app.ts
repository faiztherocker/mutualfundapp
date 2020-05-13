import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import { FileLogger } from './utils/file-logger/file-logger';
import { HelmetWall } from './utils/helmet-wall-middleware/helmet-wall-middleware';
import { ExceptionHandler } from './utils/exception-handler/exception-handler';

export class App extends Fort {
  
  constructor() {
    super();
    this.routes = routes;
    this.viewEngine = MustacheViewEngine;
    this.logger = new FileLogger();
    this.walls = [HelmetWall];
    this.errorHandler = ExceptionHandler;
    
  }
}
