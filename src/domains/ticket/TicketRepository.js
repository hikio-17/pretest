class TicketRepository {
  async addTicket(payload, userId) {
    throw new Error('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getTicketById(ticketId, userId) {
    throw new Error('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getAllTicket(userId) {
    throw new Error('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async deleteTicketById(ticketId, userId) {
    throw new Error('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = TicketRepository;