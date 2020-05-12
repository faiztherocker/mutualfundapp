import { InvestorRegistrationService } from './investor-registration.interface';
import { Investor } from '../models/investor';
import { INVESTOR_DATA } from '../dao/investor-registration.dao';

export class InvestorRegistrationServiceImpl
  implements InvestorRegistrationService {
  getInvestors(): Investor[] {
    return INVESTOR_DATA;
  }
}
