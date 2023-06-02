const TicketRepository = require('../../domains/ticket/TicketRepository');
const Ticket = require('../database/models/Ticket');

class TicketRepsositoryMongoDB extends TicketRepository {
  async addTicket({ title, description }, userId) {
    const ticket = await Ticket.create({
      title,
      description,
      createdBy: userId,
    });

    return {
      _id: ticket._id,
      title: ticket.title,
      createdBy: ticket.createdBy,
    };
  }
}

module.exports = TicketRepsositoryMongoDB;