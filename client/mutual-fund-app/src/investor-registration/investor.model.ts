export class DateOfBirth {
  day: string;
  month: string;
  year: string;

  constructor(day: string, month: string, year: string) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

export class Investor {
  id: string;
  name: string;
  emailId: string;
  pancardNumber: string;
  dateOfBirth: DateOfBirth;
  termsAndConditionAcceptanceStatus: boolean;

  constructor(
    id: string,
    name: string,
    emailId: string,
    pancardNumber: string,
    dateOfBirth: DateOfBirth,
    termsAndConditionAcceptanceStatus: boolean
  ) {
    this.id = id;
    this.name = name;
    this.emailId = emailId;
    this.pancardNumber = pancardNumber;
    this.dateOfBirth = dateOfBirth;
    this.termsAndConditionAcceptanceStatus = termsAndConditionAcceptanceStatus;
  }
}
