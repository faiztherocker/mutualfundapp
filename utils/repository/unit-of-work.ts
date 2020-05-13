import { Db, Collection } from 'mongodb';
import { Investor } from '../../investor-registration/models/investor';
import { BaseRepository } from './base-repository';

export class UnitOfWork {
  private _investorRepository: BaseRepository<Investor>;
  _dbContext: Collection;

  constructor(dbContext: Db, collection: string) {
    this._dbContext = dbContext.collection(collection);
  }

  get investorRepository(): BaseRepository<Investor> {
    if (!this._investorRepository) {
      this._investorRepository = new BaseRepository<Investor>(this._dbContext);
    }
    return this._investorRepository;
  }
}
