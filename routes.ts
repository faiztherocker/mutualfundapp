import { ParentRoute } from 'fortjs';
import { InvestorRegistrationController } from './investor-registration/controllers/investor-registration.controller';


export const routes: ParentRoute[] = [
  {
    path: '/investor-registration',
    controller: InvestorRegistrationController
  }
];
