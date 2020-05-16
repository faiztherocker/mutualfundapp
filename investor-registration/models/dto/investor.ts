import { DateOfBirthDTO } from './date-of-birth';

export class InvestorDTO {
  private _id?: string;

  private _name: string;

  private _mobileNumber: string;

  private _emailId: string;

  private _pancardNumber: string;

  private _dateOfBirth: DateOfBirthDTO;

  private _termsAndConditionAcceptanceStatus: boolean;

  constructor(
    id: string,
    name: string,
    mobileNumber: string,
    emailId: string,
    pancardNumber: string,
    dateOfBirth: DateOfBirthDTO,
    termsAndConditionAcceptanceStatus: boolean
  ) {
    this._id = id;
    this._name = name;
    this._mobileNumber = mobileNumber;
    this._emailId = emailId;
    this._pancardNumber = pancardNumber;
    this._dateOfBirth = dateOfBirth;
    this._termsAndConditionAcceptanceStatus = termsAndConditionAcceptanceStatus;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get emailId(): string {
    return this._emailId;
  }

  get mobileNumber(): string {
    return this._mobileNumber;
  }

  get pancardNumber(): string {
    return this._pancardNumber;
  }

  get dateOfBirth(): DateOfBirthDTO {
    return this._dateOfBirth;
  }

  get termsAndConditionAcceptanceStatus(): boolean {
    return this._termsAndConditionAcceptanceStatus;
  }
}
