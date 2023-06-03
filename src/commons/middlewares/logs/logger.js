/* eslint-disable import/no-extraneous-dependencies */
const appRoot = require('app-root-path');
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { convertDate } = require('../../date/convertDate');

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;