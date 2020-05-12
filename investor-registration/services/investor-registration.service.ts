import { Investor } from '../models/investor';
// import { INVESTOR_DATA } from '../dao/investor-registration.dao';
import { IInvestorRegistrationService } from './investor-registration.interface';
import { BaseRepository } from '../../utils/repository/base-repository';
import { Singleton } from 'fortjs';
import { InvestorRegistrationRepository } from '../repository/investor-registration.repository';

export class InvestorRegistrationService
  implements IInvestorRegistrationService {
  private _repository: BaseRepository<Investor>;

  async getInvestors(): Promise<Investor[]> {
    this._repository = new InvestorRegistrationRepository();
    return await this._repository.find();
  }
}
