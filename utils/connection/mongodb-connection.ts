import { injectable, inject } from 'inversify';
import { LOGGER_TYPE } from '../dependency-injection/dependency-injection.types';
import { FileLogger } from '../file-logger/file-logger';
import { connect, Mongoose } from 'mongoose';

@injectable()
export class MongoDBConnection {
  readonly _databaseUri: string;

  dbContext: Mongoose;
  private logger: FileLogger;

  constructor(@inject(LOGGER_TYPE.FileLogger) logger: FileLogger) {
    this._databaseUri = `mongodb+srv://faizal:Q1GMChi7hZwP7fG8@mutualfundsapp-rrpvk.azure.mongodb.net/mutualfundsDB?retryWrites=true&w=majority`;
    this.logger = logger;
  }

  async init() {
    try {
      this.dbContext = await connect(
        this._databaseUri,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      this.dbContext.set(
        'debug',
        (collection, method, query, document, options) => {
          this.logger.info({
            message: 'Mongoose Logs',
            extra: {
              collection: collection,
              method: method,
              query: query,
              document: document,
              options: options
            }
          });
        }
      ); // logg to winston
      this.logger.info({
        message: 'Connection to the MongoDB instance has been created'
      });
      this.closeConnectionRegistration();
    } catch (exception) {
      this.logger.error({
        message: 'Failed to connect with mongodb',
        extra: exception
      });
    }
  }

  async closeConnectionRegistration() {
    process.on('SIGINT', async () => {
      try {
        await this.dbContext.connection.close();
        this.logger.info({
          message: 'The connection to the database was closed successfully'
        });
        process.exit(0);
      } catch (exception) {
        this.logger.error({
          message: exception.message
        });
      }
    });
  }
}
