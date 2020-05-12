import { DateOfBirth } from './date-of-birth';
import { Length } from 'class-validator';
import { InvestorRegistrationBusinessExceptions } from '../../utils/business-exceptions/investor-registration/investor-registration-business-exceptions';

export class Investor {
  id?: string;

  @Length(2, 50, {
    message: InvestorRegistrationBusinessExceptions.investorNameException
  })
  name: string;

  mobileNumber: string;

  emailId: string;

  pancardNumber: string;

  dateOfBirth: DateOfBirth;

  termsAndConditionAcceptanceStatus: boolean;

  constructor(investor: Investor) {
    this.id = Math.random().toString();
    this.name = investor.name;
    this.mobileNumber = investor.mobileNumber;
    this.emailId = investor.emailId;
    this.pancardNumber = investor.pancardNumber;
    this.termsAndConditionAcceptanceStatus =
      investor.termsAndConditionAcceptanceStatus;
  }
}
