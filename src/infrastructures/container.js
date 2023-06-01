/* eslint-disable import/no-extraneous-dependencies */
const { createContainer, asClass } = require('awilix');

// service (repository, helper, manager, etc)
const UserRepositoryMongoDb = require('./repository/UserRepositoryMongoDB');
const BcryptPasswordHash = require('./security/BcryptPasswordHash');
const EmailValidator = require('../domains/user/validators/EmailValidator');
const AuthenticationRepositoryMongoDB = require('./repository/AuthenticationRepositoryMongoDB');
const AuthenticationTokenManager = require('./security/JwtTokenManager');

// Use Case
const AddUserUseCase = require('../applications/use_case/AddUserUseCase');
const LoginUserUseCase = require('../applications/use_case/LoginUserUseCase');

const container = createContainer();

container.register({
  userRepository: asClass(UserRepositoryMongoDb),
  passwordHash: asClass(BcryptPasswordHash),
  emailValidator: asClass(EmailValidator),
  authenticationRepository: asClass(AuthenticationRepositoryMongoDB),
  authenticationTokenManager: asClass(AuthenticationTokenManager),
  addUserUseCase: asClass(AddUserUseCase),
  loginUserUseCase: asClass(LoginUserUseCase),
});
module.exports = container;