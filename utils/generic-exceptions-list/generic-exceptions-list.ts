export const GENERIC_EXCEPTIONS = new Map<string, string>();

GENERIC_EXCEPTIONS.set(
  'SERVICE.NOT.AVAILABLE',
  `The service class is not available. Please try again later.`
);

GENERIC_EXCEPTIONS.set('INVALID.ID', `The provided id is invaid.`);

GENERIC_EXCEPTIONS.set('PAGE.NOT.FOUND', `The requested URL was not found.`);

GENERIC_EXCEPTIONS.set(
  'METHOD.NOT.ALLOWED',
  `This method is not allowed on the requested URL.`
);

GENERIC_EXCEPTIONS.set(
  'REQUEST.NOT.ACCEPTABLE',
  `The server is only capable of serving JSON responses. Make sure you have Accept header set to application/json`
);
