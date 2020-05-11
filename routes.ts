import { DefaultController } from './controllers/default_controller';
import { ParentRoute } from 'fortjs';
import { InvestorRegistrationController } from './controllers/investor-registration/investor-registration';

export const routes: ParentRoute[] = [
  {
    path: '/*',
    controller: DefaultController
  },
  {
    path: '/investor-registration',
    controller: InvestorRegistrationController
  }
];
