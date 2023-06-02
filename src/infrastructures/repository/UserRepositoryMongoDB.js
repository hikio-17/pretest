/* eslint-disable no-return-await */
const AuthenticationError = require('../../commons/exceptions/AuthenticationError');
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
    return {
      userId: user._id,
      username: user.username,
    };
  }

  async verifyAvailableEmail(email) {
    const user = await User.findOne({ email });

    if (user) {
      throw new InvariantError('Email already exist');
    }
  }

  async getPasswordByEmail(email) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new InvariantError('Email tidak valid!');
    }
    return user.password;
  }

  async getIdByEmail(email) {
    const user = await User.findOne({ email }).select('_id');
    return user._id;
  }

  async getUserByEmail(email) {
    return User.findOne({ email }).select('-password');
  }
}

module.exports = UserRepositoryMongoDB;