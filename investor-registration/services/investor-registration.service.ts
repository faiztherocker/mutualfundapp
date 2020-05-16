import { InvestorDTO } from '../models/dto/investor';
import { IInvestorRegistrationService } from './investor-registration.interface';
import { injectable, inject } from 'inversify';

import { UnitOfWork } from '../../utils/repository/unit-of-work';
import { InvestorSchema } from '../models/validation-schema/investor';
import { DB_TYPES } from '../../utils/dependency-injection/dependency-injection.types';
import { MongoDBConnection } from '../../utils/connection/mongodb-connection';
import { InvestorDAO } from '../models/dao/investor';
import { DateOfBirthDTO } from '../models/dto/date-of-birth';

@injectable()
export class InvestorRegistrationService
  implements IInvestorRegistrationService<InvestorDTO> {
  private readonly _unitOfWork: UnitOfWork;

  constructor(
    @inject(DB_TYPES.MongoDBConnection) dbContext: MongoDBConnection
  ) {
    this._unitOfWork = new UnitOfWork(
      InvestorSchema.getSchema(dbContext.connection)
    );
  }

  async find(): Promise<InvestorDTO[]> {
    try {
      const result = await this._unitOfWork.investorRepository
        .find()
        .then((investorList: InvestorDAO[]) =>
          investorList.map((investor: InvestorDAO) =>
            this.toInvestorDTO(investor)
          )
        );

      return result;
    } catch (exception) {
      throw exception;
    }
  }

  async create(investor: InvestorDTO): Promise<InvestorDTO> {
    return null;
  }

  toInvestorDTO(investorDAO: InvestorDAO): InvestorDTO {
    return new InvestorDTO(
      investorDAO._id,
      investorDAO.name,
      investorDAO.mobileNumber,
      investorDAO.emailId,
      investorDAO.pancardNumber,
      new DateOfBirthDTO(
        investorDAO.dateOfBirth.year,
        investorDAO.dateOfBirth.month,
        investorDAO.dateOfBirth.day
      ),
      investorDAO.termsAndConditionAcceptanceStatus
    );
  }
}
