import { DateOfBirthDAO } from './date-of-birth';

import { Document } from 'mongoose';

export class InvestorDAO extends Document {
  id?: string;

  name: string;

  mobileNumber: string;

  emailId: string;

  pancardNumber: string;

  dateOfBirth: DateOfBirthDAO;

  termsAndConditionAcceptanceStatus: boolean;

  constructor(
    { ...investor }: InvestorDAO,
    { ...dateOfBirth }: DateOfBirthDAO
  ) {
    super();
    this.id = Math.random().toString();
    this.name = investor.name;
    this.mobileNumber = investor.mobileNumber;
    this.emailId = investor.emailId;
    this.pancardNumber = investor.pancardNumber;
    this.dateOfBirth.year = dateOfBirth.year;
    this.dateOfBirth.month = dateOfBirth.month;
    this.dateOfBirth.day = dateOfBirth.day;
    this.termsAndConditionAcceptanceStatus =
      investor.termsAndConditionAcceptanceStatus;
  }
}
