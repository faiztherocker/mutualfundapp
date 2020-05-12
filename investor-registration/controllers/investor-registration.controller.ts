import {
  Controller,
  Worker,
  HTTP_METHOD,
  Route,
  jsonResult,
  Shields,
  Singleton
} from 'fortjs';

import { AuthenticationShield } from '../../utils/authentication-shield/authentication-shield';
import { InvestorRegistrationService } from '../services/investor-registration.interface';
import { InvestorRegistrationServiceImpl } from '../services/investor-registration.service';

@Shields([AuthenticationShield])
export class InvestorRegistrationController extends Controller {
  private investorService: InvestorRegistrationService;

  constructor(
    @Singleton(InvestorRegistrationServiceImpl)
    investorService: InvestorRegistrationService
  ) {
    super();
    this.investorService = investorService;
  }

  @Worker([HTTP_METHOD.Get])
  @Route('/')
  async getInvestors() {
    return jsonResult(this.investorService.getInvestors());
  }
}
