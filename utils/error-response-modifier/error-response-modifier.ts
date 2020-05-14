import { ValidationError } from 'class-validator';
import { injectable } from 'inversify';

export class ErrorResponse {
  property: string;
  constraints: Constraints[];
}

export class Constraints {
  name: string;
  message: string;
}

export interface IErrorResponseModifier {
  modify(errors: ValidationError[]): ErrorResponse[];
}

@injectable()
export class ClassValidatorErrorResponseModifier<T>
  implements IErrorResponseModifier {
  modify(errors: ValidationError[]): ErrorResponse[] {
    const errorResponse: ErrorResponse[] = [];

    errors.forEach((error: ValidationError) => {
      const constraints: Constraints[] = [];
      Object.keys(error.constraints).forEach(constraint => {
        constraints.push({
          name: constraint,
          message: error.constraints[constraint]
        });
      });
      errorResponse.push({
        property: error.property,
        constraints: constraints
      });
    });
    return errorResponse;
  }
}
