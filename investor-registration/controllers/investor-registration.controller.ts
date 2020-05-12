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
import { IInvestorRegistrationService } from '../services/investor-registration.interface';
import { InvestorRegistrationService } from '../services/investor-registration.service';

@Shields([AuthenticationShield])
export class InvestorRegistrationController extends Controller {
  private _investorService: IInvestorRegistrationService;

  @Worker([HTTP_METHOD.Get])
  @Route('/')
  async getInvestors() {
    this._investorService = new InvestorRegistrationService();
    return jsonResult(this._investorService.getInvestors());
  }
}
