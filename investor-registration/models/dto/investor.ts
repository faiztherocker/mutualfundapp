import { DateOfBirthDTO } from './date-of-birth';
import {
  Validate,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  matches,
  Length
} from 'class-validator';
import { ObjectIdValidator } from '../../../utils/custom-validators/objectId-validator';
import { INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS } from '../../exceptions/investor-registration-exceptions';

export class InvestorDTO {
  @IsOptional()
  @Validate(ObjectIdValidator)
  id?: string;

  @IsString({
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.NAME.SHOULD_BE_STRING'
    )
  })
  @MinLength(2, {
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.NAME.LENGTH.TOO_SHORT'
    )
  })
  @MaxLength(50, {
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.NAME.LENGTH.TOO_LONG'
    )
  })
  @Matches(/^[a-zA-Z'. ]*$/, {
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.NAME.REGEX'
    )
  })
  name: string;

  @IsString({
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.MOBILE.STRING'
    )
  })
  @Matches(/^[6-9]\d*$/, {
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.MOBILE.REGEX'
    )
  })
  @Length(10, 10, {
    message: INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.get(
      'INVESTOR.MOBILE.LENGTH'
    )
  })
  mobileNumber: string;

  
  emailId: string;

  pancardNumber: string;

  dateOfBirth: DateOfBirthDTO;

  termsAndConditionAcceptanceStatus: boolean;

  constructor(
    id: string,
    name: string,
    mobileNumber: string,
    emailId: string,
    pancardNumber: string,
    dateOfBirth: DateOfBirthDTO,
    termsAndConditionAcceptanceStatus: boolean
  ) {
    this.id = id || undefined;
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.emailId = emailId;
    this.pancardNumber = pancardNumber;
    this.dateOfBirth = dateOfBirth;
    this.termsAndConditionAcceptanceStatus = termsAndConditionAcceptanceStatus;
  }
}
