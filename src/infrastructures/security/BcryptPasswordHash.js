/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require('bcryptjs');
const EncryptedHelper = require('../../applications/security/PasswordHash');
const AuthenticationError = require('../../commons/exceptions/AuthenticationError');

class BcryptPasswordHash extends EncryptedHelper {
  async hash(password) {
    return bcrypt.hash(password, 10);
  }

  async comparePassword(password, hashedPassword) {
    const result = await bcrypt.compare(password, hashedPassword);
    console.log(result);
    if (!result) {
      throw new AuthenticationError('Kredential not valid');
    }
  }
}

module.exports = BcryptPasswordHash;