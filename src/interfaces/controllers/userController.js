/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const asyncHandler = require('express-async-handler');

class UserController {
  constructor(container) {
    this._container = container;
    this.userRegister = this.userRegister.bind(this);
  }

  userRegister = asyncHandler(async (req, res) => {
    const addUserUseCase = this._container.resolve('addUserUseCase');
    const userId = await addUserUseCase.execute(req.body);
    res.status(200).json({
      status: 'success',
      message: 'User registered successfuly',
      data: {
        userId,
      },
    });
  });
}

module.exports = UserController;