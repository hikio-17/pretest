const AddUserUseCase = require('../../applications/use_case/AddUserUseCase');
const EmailValidator = require('../../domains/user/validators/EmailValidator');
const UserRepositoryMongoDB = require('../../infrastructures/repository/UserRepositoryMongoDB');
const BcryptPasswordHash = require('../../infrastructures/security/BcryptPasswordHash');

class UserController {
  constructor(addUserUseCase) {
    this._addUserUseCase = addUserUseCase;
  }

  async userRegister(req, res) {
    try {
      const userId = await this._addUserUseCase.execute(req.body);

      res.status(200).json({
        status: 'success',
        message: 'User registered successfuly',
        data: {
          userId,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }
}

module.exports = UserController;