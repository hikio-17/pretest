const RegisterUser = require('../../../domains/user/entities/UserRegister');
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

    /** MOCKING NEEDED FUNCTION */
    mockUserRepository.verifyAvailableEmail = jest.fn(() => Promise.resolve());
    mockPasswordHash.hash = jest.fn(() => Promise.resolve('encrypted_password'));
    mockUserRepository.addUser = jest.fn(() => Promise.resolve(mockUserRegistered));

    /** CREATING USE CASE INSTANCE */
    const addUserUseCase = new AddUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash,
    });

    // Action
    const userRegistered = await addUserUseCase.execute(useCasePayload);

    // Assert
    expect(userRegistered).toStrictEqual(mockUserRegistered);
  });
});