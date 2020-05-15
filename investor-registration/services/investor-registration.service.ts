import { Investor } from '../models/app/investor';
import { IInvestorRegistrationService } from './investor-registration.interface';
import { injectable, inject } from 'inversify';

import { UnitOfWork } from '../../utils/repository/unit-of-work';
import { InvestorSchema } from '../models/validation-schema/investor';
import { DB_TYPES } from '../../utils/dependency-injection/dependency-injection.types';
import { MongoDBConnection } from '../../utils/connection/mongodb-connection';

@injectable()
export class InvestorRegistrationService
  implements IInvestorRegistrationService<Investor> {
  private _unitOfWork: UnitOfWork;
  

  constructor(@inject(DB_TYPES.MongoDBConnection) dbContext: MongoDBConnection) {
    this._unitOfWork = new UnitOfWork(
      new InvestorSchema(dbContext.connection).schema
    );
  }

  async find() {
    try {
      return await this._unitOfWork.investorRepository.find();
    } catch (exception) {
      throw exception;
    }
  }

  async create(investor: Investor): Promise<Investor> {
    return null;
  }
}
