import { MongoClient, Db } from 'mongodb';
import { IException } from 'fortjs';
import { IConnection } from './iconnection.interface';
import { injectable, inject } from 'inversify';
import { LOGGER_TYPE } from '../dependency-injection/dependency-injection.types';
import { FileLogger } from '../file-logger/file-logger';
import { Log } from '../file-logger/log.model';

@injectable()
export class MongoDBConnection implements IConnection {
  dbContext: Db;
  readonly _databaseUri: string;

  private client: MongoClient;
  private connection: MongoClient;
  private logger: FileLogger;

  constructor(@inject(LOGGER_TYPE.FileLogger) logger: FileLogger) {
    this._databaseUri = `mongodb+srv://faizal:Q1GMChi7hZwP7fG8@mutualfundsapp-rrpvk.azure.mongodb.net/test?retryWrites=true&w=majority`;
    this.client = new MongoClient(this._databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    this.logger = logger;
  }

  async init() {
    try {
      this.connection = await this.client.connect();
      this.logger.info({
        message: 'Connection to the MongoDB instance has been created'
      });
    } catch (exception) {
      this.logger.error({
        message: 'Failed to connect with mongodb',
        extra: exception
      });
    }

    this.dbContext = this.connection.db('mutualfundsDB');
  }
}
