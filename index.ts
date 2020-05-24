import 'reflect-metadata';
import { App } from './app';
import * as path from 'path';
import { MongoDBConnection } from './utils/connection/mongodb-connection';
import { DB_TYPES } from './utils/dependency-injection/dependency-injection.types';

import {
  container,
  dependencyInjection
} from './utils/dependency-injection/dependency-injection';

export const createApp = async () => {
  // -- INVERSIFYJS DI CONTAINER INSTANTIATION -- //
  dependencyInjection.loadAppSpecificDependencies();

  // -- MONGODB CONNECTION INITIATION -- //
  const mongoDBConnection: MongoDBConnection = container.get<MongoDBConnection>(
    DB_TYPES.MongoDBConnection
  );
  await mongoDBConnection.init();

  // -- INSTANTIATING APPLICATION WIDE DEPENDENCIES -- //
  dependencyInjection.loadBusinessDependencies();

  const app = new App();
  await app.create({
    appName: 'mutualfundsapp',
    port: 4200,
    folders: [
      {
        alias: '/',
        path: path.join(__dirname, '../static')
      }
    ]
  });
  process.env.APP_URL = 'http://localhost:4200';
  return app;
};
if (process.env.NODE_ENV !== 'test') {
  createApp()
    .then(app => {
      app.logger.debug(
        `Your fort is located at address - ${process.env.APP_URL}`
      );
    })
    .catch(err => {
      console.error(err);
    });
}
