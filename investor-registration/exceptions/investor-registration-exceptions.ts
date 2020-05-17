export const INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS = new Map<
  string,
  string
>();

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.SHOULD_BE_STRING',
  `The value of Investor Name should be a string.`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.LENGTH.TOO_SHORT',
  `The value of Investor Name should be atleast 2 characters.`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.LENGTH.TOO_LONG',
  `The value of Investor Name can be atmost 50 characters long.`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.NAME.REGEX',
  `The value of Investor Name can have only alphabets, . and spaces.`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.MOBILE.STRING',
  `The value of Investor Mobile Number should be a string.`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.MOBILE.REGEX',
  `The value of Investor Mobile Number should only contain valid indian mobile number. It should start with digits from 6-9`
);

INVESTOR_REGISTRATION_BUSINESS_EXCEPTIONS.set(
  'INVESTOR.MOBILE.LENGTH',
  `The value of Investor Mobile Number should be of 10 characters.`
);


