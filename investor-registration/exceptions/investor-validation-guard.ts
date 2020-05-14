import { Guard, HttpResult, jsonResult, HTTP_STATUS_CODE } from 'fortjs';
import { Investor } from '../models/investor';
import { validate, ValidationError } from 'class-validator';
import { lazyInject } from '../../utils/dependency-injection/dependency-injection';
import { UTILITY_TYPE } from '../../utils/dependency-injection/dependency-injection.types';
import { IErrorResponseModifier } from '../../utils/error-response-modifier/error-response-modifier';

export class InvestorValidationGuard extends Guard {
  @lazyInject(UTILITY_TYPE.IErrorResponseModifier)
  errorResponseModifier: IErrorResponseModifier;

  async check(...args: any[]): Promise<HttpResult> {
    const investor = new Investor(this.body);
    const errors: ValidationError[] = await validate(investor);
    if (errors.length === 0) {
      this.data.investor = investor;
      return null;
    } else {
      return jsonResult(
        this.errorResponseModifier.modify(errors),
        HTTP_STATUS_CODE.BadRequest
      );
    }
  }
}
