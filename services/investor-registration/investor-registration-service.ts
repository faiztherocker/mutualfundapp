import { InvestorRegistrationService } from './investor-registration-service.interface';
import { Investor } from '../../models/Investor/investor';
import { INVESTOR_DATA } from '../../data/investor-registration/investor-registration';

export class InvestorRegistrationServiceImpl
  implements InvestorRegistrationService {
  getInvestors(): Investor[] {
    return INVESTOR_DATA;
  }
}
