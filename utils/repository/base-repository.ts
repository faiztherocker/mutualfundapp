import { IWrite } from './write.interface';
import { IRead } from './read.interface';
import { inject } from 'inversify';
import { LOGGER_TYPE } from '../dependency-injection/dependency-injection.types';
import { FileLogger } from '../file-logger/file-logger';
import { INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS } from '../../investor-registration/exceptions/investor-registration-exceptions';
import { Model, Document } from 'mongoose';
import { GENERIC_EXCEPTIONS } from '../generic-exceptions-list/generic-exceptions-list';

export class BaseRepository<T extends Document> implements IWrite<T>, IRead<T> {
  _schemaModel: Model<Document>;
  @inject(LOGGER_TYPE.FileLogger) logger: FileLogger;

  constructor(schemaModel: Model<Document>) {
    this._schemaModel = schemaModel;
  }

  create(item: T): Promise<T> {
    try {
      return null;
    } catch (exception) {}
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
      result = (await this._schemaModel.find()) as T[];
      console.log(result);
    } catch (exception) {
      this.logger.error({
        message: exception.message,
        extra: exception.stack
      });
      throw new Error(exception.message);
    }

    return result;
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
