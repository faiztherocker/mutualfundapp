import { Schema } from 'mongoose';
import { DateOfBirthDAO } from '../dao/date-of-birth';

export class DateOfBirthSchema {
  static get schemaStructure(): Schema {
    const schema = new Schema<DateOfBirthDAO>(
      {
        year: {
          type: Number,
          required: true
        },
        month: {
          type: Number,
          required: true
        },
        day: {
          type: Number,
          required: true
        }
      },
      {
        _id: false
      }
    );
    return schema;
  }
}
