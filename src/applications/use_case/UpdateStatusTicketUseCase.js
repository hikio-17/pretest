const UpdateStatusTicket = require('../../domains/ticket/entities/UpdateStatusTicket');

class UpdateStatusTicketUseCase {
  constructor({ ticketRepository }) {
    this._ticketRepository = ticketRepository;
  }

  async execute(useCasePayload, ticketId) {
    this._verifyTicketId(ticketId);
    const { status } = new UpdateStatusTicket(useCasePayload);
    /* istanbul ignore next */
    await this._ticketRepository.verifyAvailableTicket(ticketId);
    /* istanbul ignore next */
    return this._ticketRepository.updateStatusTicket(status, ticketId);
  }

  _verifyTicketId(ticketId) {
    if (!ticketId) {
      throw new Error('UPDATE_STATUS_TICKET_USE_CASE.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof ticketId !== 'string') {
      throw new Error('UPDATE_STATUS_TICKET_USE_CASE.TICKET_ID_NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = UpdateStatusTicketUseCase;