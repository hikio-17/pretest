/* eslint-disable max-len */
const RegisterUser = require('../../../domains/user/entities/UserRegister');
const EmailValidator = require('../../../domains/user/validators/EmailValidator');
const UserRepository = require('../../../domains/user/UserRepository');
const PasswordHash = require('../../security/PasswordHash');
const AddUserUseCase = require('../AddUserUseCase');

describe('AddUserUseCase', () => {
  it('Should orchestrating the add user action correctly', async () => {
    // Arrange
    const useCasePayload = {
      username: 'hikio010217',
      email: 'hikio@gmail.com',
      password: 'secret',
    };

    const mockUserRegistered = {
      id: 'user-123',
      username: useCasePayload.username,
    };

    /** CREATING DEPENDENCY OF USE CASE */
    const mockUserRepository = new UserRepository();
    const mockPasswordHash = new PasswordHash();
    const mockEmailValidator = new EmailValidator();

    /** MOCKING NEEDED FUNCTION */
    mockUserRepository.verifyAvailableEmail = jest.fn(() => Promise.resolve());
    mockPasswordHash.hash = jest.fn().mockImplementation(() => Promise.resolve('encrypted_password'));
    mockUserRepository.addUser = jest.fn().mockImplementation(() => Promise.resolve(mockUserRegistered));

    /** CREATING USE CASE INSTANCE */
    const addUserUseCase = new AddUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash,
      emailValidator: mockEmailValidator,
    });

    // Action
    const userRegistered = await addUserUseCase.execute(useCasePayload);

    // Assert
    expect(userRegistered).toStrictEqual(mockUserRegistered);
    expect(mockUserRepository.verifyAvailableEmail).toBeCalledWith(useCasePayload.email);
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.password);
    expect(mockUserRepository.addUser).toBeCalledWith(new RegisterUser({
      username: useCasePayload.username,
      email: useCasePayload.email,
      password: 'encrypted_password',
    }));
  });
});