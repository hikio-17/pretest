/* eslint-disable max-len */
const UpdateStatusTicketUseCase = require('../UpdateStatusTicketUseCase');

describe('UpdateStatusTicketUseCase', () => {
  let updateStatusTicketUseCase;
  let ticketRepository;

  beforeEach(() => {
    ticketRepository = {
      verifyAvailableTicket: jest.fn(),
      updateStatusTicket: jest.fn(),
    };
    updateStatusTicketUseCase = new UpdateStatusTicketUseCase({
      ticketRepository,
    });
  });

  describe('execute', () => {
    it('should update the ticket status', async () => {
      // Arrange
      const useCasePayload = {
        status: 'menunggu tindakan',
      };
      const ticketId = 'ticket-123';

      ticketRepository.verifyAvailableTicket.mockResolvedValue();
      ticketRepository.updateStatusTicket.mockResolvedValue();

      // Act
      await updateStatusTicketUseCase.execute(useCasePayload, ticketId);

      // Assert
      expect(ticketRepository.verifyAvailableTicket).toHaveBeenCalledWith(ticketId);
      expect(ticketRepository.updateStatusTicket).toHaveBeenCalledWith(useCasePayload.status, ticketId);
    });

    it('should throw an error when ticketId is missing', async () => {
      // Arrange
      const useCasePayload = {
        status: 'in progress',
      };

      // Act and Assert
      await expect(updateStatusTicketUseCase.execute(useCasePayload)).rejects.toThrow(
        'UPDATE_STATUS_TICKET_USE_CASE.NOT_CONTAIN_NEEDED_PROPERTY',
      );
    });

    it('should throw an error when ticketId has incorrect data type', async () => {
      // Arrange
      const useCasePayload = {
        status: 'in progress',
      };
      const ticketId = 123;

      // Act and Assert
      await expect(updateStatusTicketUseCase.execute(useCasePayload, ticketId)).rejects.toThrow(
        'UPDATE_STATUS_TICKET_USE_CASE.TICKET_ID_NOT_MEET_DATA_TYPE_SPECIFICATION',
      );
    });
  });
});
