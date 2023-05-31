/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./interfaces/routes/userRouter');
const connectDB = require('./infrastructures/database/db');

// Dependency
const UserRepositoryMongoDB = require('./infrastructures/repository/UserRepositoryMongoDB');
const BcryptPasswordHash = require('./infrastructures/security/BcryptPasswordHash');
const EmailValidator = require('./domains/user/validators/EmailValidator');
const AddUserUseCase = require('./applications/use_case/AddUserUseCase');
const UserController = require('./interfaces/controllers/userController');

const userRepository = new UserRepositoryMongoDB();
const passwordHash = new BcryptPasswordHash();
const emailValidator = new EmailValidator();

const addUserUseCase = new AddUserUseCase({ userRepository, passwordHash, emailValidator });

const userController = new UserController(addUserUseCase);

const app = express();

/** MIDDLEWARE */
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

/** ROUTES */
app.use('/api', userRoutes);

/** CONNECT TO MONGODB */
connectDB();

module.exports = app;
