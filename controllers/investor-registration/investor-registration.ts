import {
  Controller,
  Worker,
  HTTP_METHOD,
  Route,
  textResult,
  DefaultWorker,
  jsonResult,
  Shields
} from 'fortjs';
import { InvestorRegistrationServiceImpl } from '../../services/investor-registration/investor-registration-service';
import { AuthenticationShield } from '../../utils/authentication-shield/authentication-shield';

@Shields([AuthenticationShield])
export class InvestorRegistrationController extends Controller {
  @Worker([HTTP_METHOD.Get])
  @Route('/')
  async getInvestors() {
    const investorService = new InvestorRegistrationServiceImpl();
    return jsonResult(investorService.getInvestors());
  }
}
