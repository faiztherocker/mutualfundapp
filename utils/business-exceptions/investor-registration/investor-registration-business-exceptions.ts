import { ValidationArguments } from 'class-validator';
import { INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS } from './investor-registration-business-exceptions.constants';

export abstract class InvestorRegistrationBusinessExceptions {
  static investorNameException(validationArguement: ValidationArguments) {
    if (validationArguement.value.length < 2) {
      return INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
        'INVESTOR.NAME.LENGTH.TOO_SHORT'
      )(validationArguement.value);
    } else if (validationArguement.value.length > 50) {
      return INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
        'INVESTOR.NAME.LENGTH.TOO_LONG'
      )(validationArguement.value);
    }
  }
}
