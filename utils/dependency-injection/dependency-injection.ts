import { Container } from 'inversify';
import {
  DB_TYPES,
  INVESTOR_REGISTRATION_TYPE,
  LOGGER_TYPE
} from './dependency-injection.types';
import { MongoDBConnection } from '../connection/mongodb-connection';
import { IConnection } from '../connection/iconnection.interface';
import { IInvestorRegistrationService } from '../../investor-registration/services/investor-registration.interface';
import { InvestorRegistrationService } from '../../investor-registration/services/investor-registration.service';
import getDecorators from 'inversify-inject-decorators';
import { FileLogger } from '../file-logger/file-logger';

const container = new Container();
const { lazyInject } = getDecorators(container);
const dependencyInjection = {
  init: () => {
    container.bind<FileLogger>(LOGGER_TYPE.FileLogger).to(FileLogger);
    container
      .bind<IConnection>(DB_TYPES.IConnection)
      .to(MongoDBConnection)
      .inSingletonScope();
  },
  init2: () => {
    container
      .bind<IInvestorRegistrationService>(
        INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService
      )
      .to(InvestorRegistrationService)
      .inSingletonScope();
  }
};

export { container, lazyInject, dependencyInjection };
