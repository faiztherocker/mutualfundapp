export const INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS = new Map<
  string,
  string
>();

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.LENGTH.TOO_SHORT',
  `The value of Investor Name should be atleast 2 characters`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.LENGTH.TOO_LONG',
  `The value of Investor Name can be atmost 50 characters`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.MOBILE.LENGTH',
  `The value of Investor Mobile Number should be of 10 characters`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'DB.GET.FAILED',
  `Failure in fetching data from the database`
);
