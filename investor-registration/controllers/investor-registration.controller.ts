import {
  Controller,
  Worker,
  HTTP_METHOD,
  Route,
  jsonResult,
  Shields,
  HTTP_STATUS_CODE
} from 'fortjs';

import { AuthenticationShield } from '../../utils/authentication-shield/authentication-shield';
import { IInvestorRegistrationService } from '../services/investor-registration.interface';
import { INVESTOR_REGISTRATION_TYPE } from '../../utils/dependency-injection/dependency-injection.types';
import { lazyInject } from '../../utils/dependency-injection/dependency-injection';
import { inject } from 'inversify';

@Shields([AuthenticationShield])
export class InvestorRegistrationController extends Controller {
  @lazyInject(INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService)
  private _service: IInvestorRegistrationService;

  @Worker([HTTP_METHOD.Get])
  @Route('/')
  async getInvestors() {
    console.log(this._service);
    return jsonResult(await this._service.getInvestors(), HTTP_STATUS_CODE.Ok);
  }
}
