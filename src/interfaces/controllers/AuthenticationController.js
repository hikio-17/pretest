const asyncHandler = require('express-async-handler');

class AuthenticationController {
  constructor(container) {
    this._container = container;
  }

  userLogin = asyncHandler(async (req, res) => {
    const loginUserUseCase = this._container.resolve('loginUserUseCase');
    const data = await loginUserUseCase.execute(req.body);

    res.status(200).json({
      status: 'success',
      data,
    });
  });
}

module.exports = AuthenticationController;