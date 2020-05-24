import { Db } from 'mongodb';

export interface IConnection<T> {
  connection: T;
  readonly _databaseUri: string;
  init();
}
