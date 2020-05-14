import {
  Controller,
  Worker,
  HTTP_METHOD,
  Route,
  jsonResult,
  Shields,
  HTTP_STATUS_CODE,
  Guards,
  textResult
} from 'fortjs';

import { AuthenticationShield } from '../../utils/authentication-shield/authentication-shield';
import { IInvestorRegistrationService } from '../services/investor-registration.interface';
import {
  INVESTOR_REGISTRATION_TYPE,
} from '../../utils/dependency-injection/dependency-injection.types';
import { lazyInject } from '../../utils/dependency-injection/dependency-injection';
import { LoggingGuard } from '../../utils/logging-guard/logging-guard';
import { InvestorValidationGuard } from '../exceptions/investor-validation-guard';

@Shields([AuthenticationShield])
export class InvestorRegistrationController extends Controller {
  @lazyInject(INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService)
  private _service: IInvestorRegistrationService;

  @Worker([HTTP_METHOD.Get])
  @Route('/')
  @Guards([LoggingGuard])
  async getInvestors() {
    try {
      return jsonResult(
        await this._service.getInvestors(),
        HTTP_STATUS_CODE.Ok
      );
    } catch (exception) {
      return jsonResult(
        { error: exception.message },
        HTTP_STATUS_CODE.InternalServerError
      );
    }
  }

  @Worker([HTTP_METHOD.Post])
  @Route('/')
  @Guards([InvestorValidationGuard, LoggingGuard])
  async postInvestor() {
    return textResult('POST Endpoint working as expected', HTTP_STATUS_CODE.Ok);
  }
}
