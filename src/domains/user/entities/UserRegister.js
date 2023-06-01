class UserRegister {
  constructor(payload) {
    this._verifyPayload(payload);
    const { username, email, password } = payload;

    this.username = username;
    this.email = email;
    this.password = password;
  }

  _verifyPayload({ username, email, password }) {
    if (username === '' || email === '' || password === '') {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (username.length > 30) {
      throw new Error('REGISTER_USER.USERNAME_LIMIT_CHAR');
    }

    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

module.exports = UserRegister;
