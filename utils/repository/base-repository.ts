import { IWrite } from './write.interface';
import { IRead } from './read.interface';
import { Collection, Db } from 'mongodb';
import { inject } from 'inversify';
import { LOGGER_TYPE } from '../dependency-injection/dependency-injection.types';
import { FileLogger } from '../file-logger/file-logger';
import { INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS } from '../../investor-registration/exceptions/investor-registration-exceptions';

export class BaseRepository<T> implements IWrite<T>, IRead<T> {
  _collection: Collection;
  @inject(LOGGER_TYPE.FileLogger) logger: FileLogger;

  constructor(collection: Collection) {
    this._collection = collection;
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
    } catch (exception) {
      this.logger.error({
        message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get('DB.GET.FAILED'),
        extra: exception
      });
      throw new Error(
        INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get('DB.GET.FAILED')
      );
    }

    return result;
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
