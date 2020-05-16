import { DateOfBirthDTO } from './date-of-birth';

export class InvestorDTO {
  id?: string;

  name: string;

  mobileNumber: string;

  emailId: string;

  pancardNumber: string;

  dateOfBirth: DateOfBirthDTO;

  termsAndConditionAcceptanceStatus: boolean;

  constructor(
    id: string,
    name: string,
    mobileNumber: string,
    emailId: string,
    pancardNumber: string,
    dateOfBirth: DateOfBirthDTO,
    termsAndConditionAcceptanceStatus: boolean
  ) {
    this.id = id;
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.emailId = emailId;
    this.pancardNumber = pancardNumber;
    this.dateOfBirth = dateOfBirth;
    this.termsAndConditionAcceptanceStatus = termsAndConditionAcceptanceStatus;
  }
}
