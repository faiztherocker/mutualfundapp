import { Document } from 'mongoose';

export class DateOfBirthDAO extends Document {
  year: number;
  month: number;
  day: number;

  constructor({ ...dateOfBirth }: DateOfBirthDAO) {
    super();
    this.year = dateOfBirth.year;
    this.month = dateOfBirth.month;
    this.day = dateOfBirth.day;
  }
}
