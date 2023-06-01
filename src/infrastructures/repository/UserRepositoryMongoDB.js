/* eslint-disable no-return-await */
const InvariantError = require('../../commons/exceptions/InvariantError');
const UserRepository = require('../../domains/user/UserRepository');
const User = require('../database/models/User');

class UserRepositoryMongoDB extends UserRepository {
  async addUser({ username, email, password }) {
    const user = await User.create({
      username,
      email,
      password,
    });
    return user._id;
  }

  async verifyAvailableEmail(email) {
    const user = await User.findOne({ email });

    if (user) {
      throw new InvariantError('Email already exist');
    }
  }

  async getPasswordByEmail(email) {
    const user = await User.findOne({ email });

    return user.password;
  }

  async getIdByEmail(email) {
    return await User.findOne({ email }).select('_id');
  }
}

module.exports = UserRepositoryMongoDB;