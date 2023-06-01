const AuthenticationRepository = require('../../domains/authentications/AuthenticationRepository');
const Authentiation = require('../database/models/Authentication');
const InvariantError = require('../../commons/exceptions/InvariantError');

class AuthenticationRepositoryMongoDb extends AuthenticationRepository {
  async addToken(token) {
    await Authentiation.create({ token });
  }

  async checkAvailabilityToken(token) {
    const tokenExisting = await Authentiation.findOne({ token });

    if (!tokenExisting) {
      throw new InvariantError('refresh token tidak ditemukan');
    }
  }

  async deleteToken(token) {
    await Authentiation.findOneAndDelete({ token });
  }
}

module.exports = AuthenticationRepositoryMongoDb;