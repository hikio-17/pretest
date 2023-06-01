/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./infrastructures/database/db');
const DomainErrorTranslator = require('./commons/exceptions/DomainErrorTranslator');
const ClientError = require('./commons/exceptions/ClientError');
const userRoutes = require('./interfaces/routes/userRouter');
const authenticationRoutes = require('./interfaces/routes/authenticationRouter');

const app = express();

/** MIDDLEWARE */
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

/** ROUTES */
app.use('/api', userRoutes);
app.use('/api', authenticationRoutes);

app.use((err, req, res, next) => {
  const translatedError = DomainErrorTranslator.translate(err);

  if (err instanceof ClientError || translatedError.constructor.name === 'InvariantError') {
    res.status(translatedError.statusCode).json({
      status: 'fail',
      message: translatedError.message,
    });
    return;
  }
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
  next();
});

/** CONNECT TO MONGODB */
connectDB();

module.exports = app;
