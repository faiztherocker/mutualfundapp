import { Investor } from '../../models/Investor/investor';
import { Guid } from 'guid-typescript';

export const INVESTOR_DATA: Investor[] = [
  {
    id: Math.random().toString(),
    name: 'Faizal Vasaya',
    emailId: 'faiztherocker@gmail.com',
    mobileNumber: '+91-9036171332',
    dateOfBirth: {
      day: 25,
      month: 12,
      year: 2012
    },
    pancardNumber: 'ARDPV3212B',
    termsAndConditionAcceptanceStatus: true
  },
  {
    id: Math.random().toString(),
    name: 'Sonu Vasaya',
    emailId: 'sonu@gmail.com',
    mobileNumber: '+91-9036171332',
    dateOfBirth: {
      day: 24,
      month: 1,
      year: 2019
    },
    pancardNumber: 'ARDPV32145',
    termsAndConditionAcceptanceStatus: true
  }
];
