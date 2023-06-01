/* eslint-disable import/no-extraneous-dependencies */
const { createContainer, asClass } = require('awilix');

// service (repository, helper, manager, etc)
const UserRepositoryMongoDb = require('./repository/UserRepositoryMongoDB');
const BcryptPasswordHash = require('./security/BcryptPasswordHash');
const EmailValidator = require('../domains/user/validators/EmailValidator');

// Use Case
const AddUserUseCase = require('../applications/use_case/AddUserUseCase');

const container = createContainer();

container.register({
  userRepository: asClass(UserRepositoryMongoDb),
  passwordHash: asClass(BcryptPasswordHash),
  emailValidator: asClass(EmailValidator),
  addUserUseCase: asClass(AddUserUseCase),
});
module.exports = container;