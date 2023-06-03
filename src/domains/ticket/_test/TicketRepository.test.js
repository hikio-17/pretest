const TicketRepository = require('../TicketRepository');

describe('TicketRepository', () => {
  let ticketRepository;

  beforeEach(() => {
    ticketRepository = new TicketRepository();
  });

  describe('addTicket', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const payload = {
        // ticket payload
      };
      const userId = '123';

      // Act and Assert
      await expect(ticketRepository.addTicket(payload, userId)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });

  describe('findTicketById', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const ticketId = '123';
      const userId = '456';

      // Act and Assert
      await expect(ticketRepository.findTicketById(ticketId, userId)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });

  describe('findAllTicket', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const userAccess = 'admin';
      const query = {};

      // Act and Assert
      await expect(ticketRepository.findAllTicket(userAccess, query)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });

  describe('updateStatusTicket', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const status = 'closed';
      const ticketId = '123';

      // Act and Assert
      await expect(ticketRepository.updateStatusTicket(status, ticketId)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });

  describe('verifyAvailableTicket', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const ticketId = '123';

      // Act and Assert
      await expect(ticketRepository.verifyAvailableTicket(ticketId)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });

  describe('verifyAccessTicket', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const ticketId = '123';
      const userId = '456';

      // Act and Assert
      await expect(ticketRepository.verifyAccessTicket(ticketId, userId)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });

  describe('deleteTicketById', () => {
    it('should throw an error "TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED"', async () => {
      // Arrange
      const ticketId = '123';

      // Act and Assert
      await expect(ticketRepository.deleteTicketById(ticketId)).rejects.toThrow('TICKET_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
  });
});
