import { Investor } from '../models/investor';
import { Guid } from 'guid-typescript';

export interface IInvestorRegistrationService {
  getInvestors(): Investor[];
//   saveInvestor(investor: Investor): Investor;
//   getInvestorById(investorId: Guid): Investor;
//   updateInvestor(investor: Investor): Investor;
//   deleteInvestor(investorId: Guid): boolean;
}
