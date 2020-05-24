export const LOG_CONFIG = {
  info: {
    json: true,
    handleExceptions: true,
    datePattern: `DD-MM-YYYY`,
    filename: `logs/all.log`,
    maxSize: 1024,
    level: `info`
  },
  error: {
    json: true,
    handleExceptions: true,
    datePattern: `DD-MM-YYYY`,
    filename: `logs/error.log`,
    maxSize: 1024,
    level: `error`
  }
};
