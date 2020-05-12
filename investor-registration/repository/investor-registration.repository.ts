import { Investor } from '../models/investor';
import { BaseRepository } from '../../utils/repository/base-repository';
import { MongoDBConnection } from '../../utils/connection/mongodb-connection';

export class InvestorRegistrationRepository extends BaseRepository<Investor> {
  private readonly db;
  private baseRepository: BaseRepository<Investor>;

  constructor() {
    super(MongoDBConnection.db, 'investor');
  }
}

// export const INVESTOR_DATA: Investor[] = [
//   {
//     id: Math.random().toString(),
//     name: 'Faizal Vasaya',
//     emailId: 'faiztherocker@gmail.com',
//     mobileNumber: '+91-9036171332',
//     dateOfBirth: {
//       day: 25,
//       month: 12,
//       year: 2012
//     },
//     pancardNumber: 'ARDPV3212B',
//     termsAndConditionAcceptanceStatus: true
//   },
//   {
//     id: Math.random().toString(),
//     name: 'Sonu Vasaya',
//     emailId: 'sonu@gmail.com',
//     mobileNumber: '+91-9036171332',
//     dateOfBirth: {
//       day: 24,
//       month: 1,
//       year: 2019
//     },
//     pancardNumber: 'ARDPV32145',
//     termsAndConditionAcceptanceStatus: true
//   }
// ];
