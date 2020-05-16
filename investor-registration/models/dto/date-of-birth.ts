export class DateOfBirthDTO {
  private _year: number;
  private _month: number;
  private _day: number;

  constructor(year: number, month: number, day: number) {
    this._year = year;
    this._month = month;
    this._day = day;
  }

  get year(): number {
    return this._year;
  }

  get month(): number {
    return this._month;
  }

  get day(): number {
    return this._day;
  }
}
