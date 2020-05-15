import { Schema, Mongoose } from 'mongoose';
import { InvestorDAO } from '../dao/investor';
import { DateOfBirthSchema } from './date-of-birth';

export class InvestorSchema {
  private _connection: Mongoose;

  constructor(connection: Mongoose) {
    this._connection = connection;
  }
  private get schemaStructure(): Schema {
    const schema = new Schema<InvestorDAO>(
      {
        id: {
          type: Schema.Types.ObjectId,
          required: false
        },
        name: {
          type: String,
          minlength: 2,
          maxlength: 50,
          required: true
        },
        emailId: {
          type: String,
          required: true
        },
        pancardNumber: {
          type: String,
          required: true
        },
        dateOfBirth: DateOfBirthSchema.schemaStructure,
        termsAndConditionAcceptanceStatus: {
          type: Boolean,
          required: true
        }
      },
      {
        collection: 'investor'
      }
    );
    return schema;
  }

  get schema() {
    return this._connection.model<InvestorDAO>(
      'Investor',
      this.schemaStructure
    );
  }
}
