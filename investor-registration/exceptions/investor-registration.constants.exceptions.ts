export const INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS = new Map<
  string,
  ({  }: any) => string
>();

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.LENGTH.TOO_SHORT',
  name => `The value of ${name} Investor Name should be atleast 2 characters`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.LENGTH.TOO_LONG',
  name => `The value of ${name} Investor Name should be atmost 50 characters`
);
