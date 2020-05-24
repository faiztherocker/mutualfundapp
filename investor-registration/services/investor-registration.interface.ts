import { IRead } from '../../utils/service/iread.interface';
import { IWrite } from '../../utils/service/iwrite.interface';

export interface IInvestorRegistrationService<T> extends IWrite<T>, IRead<T> {
  //  getInvestors(): Promise<T[]>;
  //   saveInvestor(investor: Investor): Investor;
  //   getInvestorById(investorId: Guid): Investor;
  //   updateInvestor(investor: Investor): Investor;
  //   deleteInvestor(investorId: Guid): boolean;
}
