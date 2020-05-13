import { IWrite } from './write.interface';
import { IRead } from './read.interface';
import { Collection, Db } from 'mongodb';

export class BaseRepository<T> implements IWrite<T>, IRead<T> {
  _collection: Collection;

  constructor(collection: Collection) {
    this._collection = collection;
    console.log(this._collection);
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
    let result: T[] = [];
    try {
      result = await this._collection.find<T>().toArray();
      console.log(result);
    } catch (exception) {
    } finally {
    }

    return result;
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
