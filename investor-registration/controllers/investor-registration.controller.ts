import {
  Controller,
  Worker,
  HTTP_METHOD,
  Route,
  jsonResult,
  Shields,
  HTTP_STATUS_CODE,
  Guards,
  textResult,
  HttpResult
} from 'fortjs';

import { AuthenticationShield } from '../../utils/authentication-shield/authentication-shield';
import { IInvestorRegistrationService } from '../services/investor-registration.interface';
import { INVESTOR_REGISTRATION_TYPE } from '../../utils/dependency-injection/dependency-injection.types';
import { lazyInject } from '../../utils/dependency-injection/dependency-injection';
import { LoggingGuard } from '../../utils/logging-guard/logging-guard';
import { InvestorValidationGuard } from '../exceptions/investor-validation-guard';
import { InvestorDTO } from '../models/dto/investor';
import { GENERIC_EXCEPTIONS } from '../../utils/generic-exceptions-list/generic-exceptions-list';

@Shields([AuthenticationShield])
export class InvestorRegistrationController extends Controller {
  @lazyInject(INVESTOR_REGISTRATION_TYPE.IInvestorRegistrationService)
  private readonly _service: IInvestorRegistrationService<InvestorDTO>;

  @Worker([HTTP_METHOD.Get])
  @Route('/')
  @Guards([LoggingGuard])
  async getInvestors(): Promise<HttpResult> {
    try {
      if (this._service) {
        const result = await this._service.find();
        return jsonResult(result, HTTP_STATUS_CODE.Ok);
      } else {
        throw Error(GENERIC_EXCEPTIONS.get('SERVICE.NOT.AVAILABLE'));
      }
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
  async saveInvestor() {
    return textResult('POST Endpoint working as expected', HTTP_STATUS_CODE.Ok);
  }
}
