import { Container } from 'inversify';
import {
  DB_TYPES,
  INVESTOR_REGISTRATION_TYPE
} from './dependency-injection.types';
import { MongoDBConnection } from '../connection/mongodb-connection';
import { IConnection } from '../connection/iconnection.interface';
import { IInvestorRegistrationService } from '../../investor-registration/services/investor-registration.interface';
import { InvestorRegistrationService } from '../../investor-registration/services/investor-registration.service';
import getDecorators from 'inversify-inject-decorators';

const container = new Container();
const { lazyInject } = getDecorators(container);
const dependencyInjection = {
  init: () => {
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

// export class DependencyInjection {
//   container: Container;
//   static lazyInjectFunction: (
//     serviceIdentifier:
//       | string
//       | symbol
//       | interfaces.Newable<any>
//       | interfaces.Abstract<any>
//   ) => (proto: any, key: string) => void;

//   constructor() {
//     this.container = new Container({ skipBaseClassChecks: true });
//     const { lazyInject } = getDecorators(this.container);
//     DependencyInjection.lazyInjectFunction = lazyInject;
//   }

//   init() {
//     this.container
//       .bind<IConnection>(DB_TYPES.IConnection)
//       .to(MongoDBConnection)
//       .inSingletonScope();
//   }

//   init2() {
//     this.container
//       .bind<IInvestorRegistrationService>(
//         INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService
//       )
//       .to(InvestorRegistrationService)
//       .inSingletonScope();
//   }
// }
