const UserRegister = require('../UserRegister');

describe('a UserRegister entities', () => {
  it('shold throw error when payload did not countain needed property', () => {
    // Arrange
    const payload = {
      username: '',
      email: 'example.com',
      password: '',
    };

    // Action & Assert
    expect(() => new UserRegister(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when did not meet data type spesification', () => {
    // Arrange
    const payload = {
      username: true,
      email: 'email.com',
      password: null,
    };

    // Action & Assert
    expect(() => new UserRegister(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username contains more than 30 character', () => {
    // Arrange
    const payload = {
      username: 'hoikdfiifpfjfjjfdjfaoiehr121332434343434',
      email: 'hikio@gmail.com',
      password: 'secret',
    };

    // Action & Assert
    expect(() => new UserRegister(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });

  it('should create UserRegister object correctly', () => {
    // Arrange
    const payload = {
      username: 'hikio010217',
      email: 'hikio@gmail.com',
      password: 'secret',
    };

    // Action
    const { username, email, password } = new UserRegister(payload);

    // Assert
    expect(username).toEqual(payload.username);
    expect(email).toEqual(payload.email);
    expect(password).toEqual(payload.password);
  });
});
