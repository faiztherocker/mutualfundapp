import { Investor } from '../models/investor';
// import { INVESTOR_DATA } from '../dao/investor-registration.dao';
import { IInvestorRegistrationService } from './investor-registration.interface';
import { inject, injectable } from 'inversify';
import { DB_TYPES } from '../../utils/dependency-injection/dependency-injection.types';
import { UnitOfWork } from '../../utils/repository/unit-of-work';
import { IConnection } from '../../utils/connection/iconnection.interface';

@injectable()
export class InvestorRegistrationService
  implements IInvestorRegistrationService {
  private _unitOfWork: UnitOfWork;

  constructor(@inject(DB_TYPES.IConnection) connection: IConnection) {
    this._unitOfWork = new UnitOfWork(connection.dbContext, 'investor');
  }

  async getInvestors(): Promise<Investor[]> {
    return await this._unitOfWork.investorRepository.find();
  }
}
