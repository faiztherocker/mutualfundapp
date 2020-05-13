import 'reflect-metadata';
import { App } from './app';
import * as path from 'path';
import { MongoDBConnection } from './utils/connection/mongodb-connection';
import {
  DB_TYPES,
  INVESTOR_REGISTRATION_TYPE
} from './utils/dependency-injection/dependency-injection.types';
import { IConnection } from './utils/connection/iconnection.interface';
import {
  container,
  dependencyInjection
} from './utils/dependency-injection/dependency-injection';
import { InvestorRegistrationService } from './investor-registration/services/investor-registration.service';

export const createApp = async () => {
  // -- INVERSIFYJS DI CONTAINER INSTANTIATION -- //

  dependencyInjection.init();

  // -- MONGODB CONNECTION INITIATION -- //
  const mongoDBConnection: IConnection = container.get<MongoDBConnection>(
    DB_TYPES.IConnection
  );

  await mongoDBConnection.init();
  dependencyInjection.init2();

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
  const result = container.get<InvestorRegistrationService>(
    INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService
  );
  // const result = diContainer.lazyInjectFunction(
  //   INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService
  // );
  console.table(result);
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
