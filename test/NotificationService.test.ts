import { IMessageClient } from "../src/abstraction/clients/IMessageClient";
import { NotificationService } from "../src/services/NotificationService";


describe('NotificationService tests', () => {
  let notificationService: NotificationService;
  let messageClientsMock: IMessageClient[];

  beforeEach(() => {
    // Mock message clients
    messageClientsMock = [
      { sendNotification: jest.fn() },
      { sendNotification: jest.fn() }
    ];
    notificationService = new NotificationService(messageClientsMock);
  });

  it('should send notification to all message clients', async () => {
    // Arrange
    const message = 'Test message';

    // Act
    await notificationService.sendNotification(message);

    // Assert
    messageClientsMock.forEach(client => {
      expect(client.sendNotification).toHaveBeenCalledWith(message);
    });
  });

  it('should throw error for empty message', async () => {
    // Arrange
    const emptyMessage = '';

    // Act & Assert
    await expect(notificationService.sendNotification(emptyMessage)).rejects.toThrowError('Empty message');
  });
});