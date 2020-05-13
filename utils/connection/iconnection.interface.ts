import { Db } from 'mongodb';

export interface IConnection {
  dbContext: Db;
  init();
}
