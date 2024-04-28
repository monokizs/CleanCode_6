import { PushNotificationClient } from "../src/clients/PushNotificationClient";

describe('PushNotificationClient tests', () => {
  let pushNotificationClient: PushNotificationClient;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    pushNotificationClient = new PushNotificationClient();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should send a push notification', async () => {
    // Arrange
    const message = "Üdv a csoportban!";

    // Act
    await pushNotificationClient.sendNotification(message);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});