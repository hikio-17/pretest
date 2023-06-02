const asyncHandler = require('express-async-handler');

class TicketController {
  constructor(container) {
    this._container = container;
  }

  addTicket = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const addTicketUseCase = this._container.resolve('addTicketUseCase');
    const addedTicket = await addTicketUseCase.execute(req.body, userId.toString());

    res.status(201).json({
      status: 'success',
      data: {
        addedTicket,
      },
    });
  });
}

module.exports = TicketController;