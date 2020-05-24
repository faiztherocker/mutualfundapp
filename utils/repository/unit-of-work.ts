import { BaseRepository } from './base-repository';
import { Model, Document } from 'mongoose';
import { InvestorDAO } from '../../investor-registration/models/dao/investor';

export class UnitOfWork {
  private _investorRepository: BaseRepository<InvestorDAO>;
  _schemaModel: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._schemaModel = schemaModel;
  }

  get investorRepository(): BaseRepository<InvestorDAO> {
    if (!this._investorRepository) {
      this._investorRepository = new BaseRepository<InvestorDAO>(
        this._schemaModel
      );
    }
    return this._investorRepository;
  }
}
