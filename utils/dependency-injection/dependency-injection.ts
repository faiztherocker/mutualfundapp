import { Container } from 'inversify';
import {
  DB_TYPES,
  INVESTOR_REGISTRATION_TYPE,
  LOGGER_TYPE,
  UTILITY_TYPE
} from './dependency-injection.types';
import { MongoDBConnection } from '../connection/mongodb-connection';
import { IConnection } from '../connection/iconnection.interface';
import { IInvestorRegistrationService } from '../../investor-registration/services/investor-registration.interface';
import { InvestorRegistrationService } from '../../investor-registration/services/investor-registration.service';
import getDecorators from 'inversify-inject-decorators';
import { FileLogger } from '../file-logger/file-logger';
import {
  IErrorResponseModifier,
  ClassValidatorErrorResponseModifier
} from '../error-response-modifier/error-response-modifier';
import { InvestorDTO } from '../../investor-registration/models/dto/investor';

const container = new Container();
const { lazyInject } = getDecorators(container);
const dependencyInjection = {
  loadAppSpecificDependencies: () => {
    container
      .bind<FileLogger>(LOGGER_TYPE.FileLogger)
      .to(FileLogger)
      .inSingletonScope();
    container
      .bind<MongoDBConnection>(DB_TYPES.MongoDBConnection)
      .to(MongoDBConnection)
      .inSingletonScope();
  },
  loadBusinessDependencies: () => {
    container
      .bind<IInvestorRegistrationService<InvestorDTO>>(
        INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService
      )
      .to(InvestorRegistrationService)
      .inRequestScope();
    container
      .bind<IErrorResponseModifier>(UTILITY_TYPE.IErrorResponseModifier)
      .to(ClassValidatorErrorResponseModifier)
      .inSingletonScope();
  }
};

export { container, lazyInject, dependencyInjection };
