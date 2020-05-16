import { DateOfBirthDAO } from './date-of-birth';

import { Document } from 'mongoose';

export class InvestorDAO extends Document {
  _id: string;

  name: string;

  mobileNumber: string;

  emailId: string;

  pancardNumber: string;

  dateOfBirth: DateOfBirthDAO;

  termsAndConditionAcceptanceStatus: boolean;

  constructor({ ...investor }: InvestorDAO) {
    super();
    this._id = investor._id;
    this.name = investor.name;
    this.mobileNumber = investor.mobileNumber;
    this.emailId = investor.emailId;
    this.pancardNumber = investor.pancardNumber;
    this.dateOfBirth.year = investor.dateOfBirth.year;
    this.dateOfBirth.month = investor.dateOfBirth.month;
    this.dateOfBirth.day = investor.dateOfBirth.day;
    this.termsAndConditionAcceptanceStatus =
      investor.termsAndConditionAcceptanceStatus;
  }
}
