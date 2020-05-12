import { IWrite } from './write.interface';
import { IRead } from './read.interface';
import { Collection, Db } from 'mongodb';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  readonly _collection: Collection;

  constructor(database: Db, collectionName: string) {
    this._collection = database.collection(collectionName);
  }

  create(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  update(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(item: T): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async find(): Promise<T[]> {
    return await this._collection.find<T>({}).toArray();
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
