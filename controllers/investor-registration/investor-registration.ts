import {
  Controller,
  Worker,
  HTTP_METHOD,
  Route,
  textResult,
  DefaultWorker,
  jsonResult,
  Shields,
  Singleton
} from 'fortjs';
import { InvestorRegistrationServiceImpl } from '../../services/investor-registration/investor-registration-service';
import { AuthenticationShield } from '../../utils/authentication-shield/authentication-shield';
import { InvestorRegistrationService } from '../../services/investor-registration/investor-registration-service.interface';

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
