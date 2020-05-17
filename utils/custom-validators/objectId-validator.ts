import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments
} from 'class-validator';
import { lazyInject } from '../../utils/dependency-injection/dependency-injection';
import { DB_TYPES } from '../dependency-injection/dependency-injection.types';
import { MongoDBConnection } from '../connection/mongodb-connection';
import { GENERIC_EXCEPTIONS } from '../generic-exceptions-list/generic-exceptions-list';
import { inject } from 'inversify';
import { isValidObjectId } from 'mongoose';

@ValidatorConstraint({ name: 'id', async: false })
export class ObjectIdValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments?: ValidationArguments): boolean {
    return value !== '' && isValidObjectId(value);
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return GENERIC_EXCEPTIONS.get('INVALID.ID');
  }
}
