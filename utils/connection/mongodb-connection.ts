import { injectable, inject } from 'inversify';
import { LOGGER_TYPE } from '../dependency-injection/dependency-injection.types';
import { FileLogger } from '../file-logger/file-logger';
import { connect, Mongoose } from 'mongoose';

@injectable()
export class MongoDBConnection {
  readonly _databaseUri: string;

  connection: Mongoose;
  private logger: FileLogger;

  constructor(@inject(LOGGER_TYPE.FileLogger) logger: FileLogger) {
    this._databaseUri = `mongodb+srv://faizal:Q1GMChi7hZwP7fG8@mutualfundsapp-rrpvk.azure.mongodb.net/mutualfundsDB?retryWrites=true&w=majority`;
    this.logger = logger;
  }

  async init() {
    try {
      this.connection = await connect(
        this._databaseUri,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      this.connection.set('debug', true);
      this.logger.info({
        message: 'Connection to the MongoDB instance has been created'
      });
    } catch (exception) {
      this.logger.error({
        message: 'Failed to connect with mongodb',
        extra: exception
      });
    }
  }
}
