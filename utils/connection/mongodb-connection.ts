import { MongoClient, Db } from 'mongodb';
import { IException } from 'fortjs';
import { IConnection } from './iconnection.interface';
import { injectable } from 'inversify';

@injectable()
export class MongoDBConnection implements IConnection {
  dbContext: Db;
  private static readonly _databaseUri = `mongodb+srv://faizal:Q1GMChi7hZwP7fG8@mutualfundsapp-rrpvk.azure.mongodb.net/test?retryWrites=true&w=majority`;
  private client: MongoClient;
  private connection: MongoClient;

  constructor() {
    this.client = new MongoClient(MongoDBConnection._databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  async init() {
    try {
      this.connection = await this.client.connect();
    } catch (exception) {
      console.log(exception);
    }
    console.log('The mongoDB has been connected !!');
    this.dbContext = this.connection.db('mutualfundsDB');
  }
}
