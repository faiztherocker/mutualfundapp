import { DateOfBirth } from './date-of-birth';
import { MinLength, MaxLength, Length, IsUppercase } from 'class-validator';
import { INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS } from '../exceptions/investor-registration-exceptions';

export class Investor {
  id?: string;

  @MinLength(2, {
    message: () =>
      INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
        'INVESTOR.NAME.LENGTH.TOO_SHORT'
      )
  })
  @MaxLength(50, {
    message: () =>
      INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
        'INVESTOR.NAME.LENGTH.TOO_LONG'
      )
  })
  @IsUppercase()
  name: string;

  @Length(10, 10, {
    message: () =>
      INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get('INVESTOR.MOBILE.LENGTH')
  })
  mobileNumber: string;

  emailId: string;

  pancardNumber: string;

  dateOfBirth: DateOfBirth;

  termsAndConditionAcceptanceStatus: boolean;

  constructor({ ...investor }: any) {
    this.id = Math.random().toString();
    this.name = investor.name;
    this.mobileNumber = investor.mobileNumber;
    this.emailId = investor.emailId;
    this.pancardNumber = investor.pancardNumber;
    this.termsAndConditionAcceptanceStatus =
      investor.termsAndConditionAcceptanceStatus;
  }
}
