import { Db } from 'mongodb';

export interface IConnection {
  dbContext: Db;
  readonly _databaseUri: string;
  init();
}
