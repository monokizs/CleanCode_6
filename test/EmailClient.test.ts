import { EmailClient } from "../src/clients/EmailClient";


describe('EmailClient tests', () => {
    let emailClient: EmailClient;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    emailClient = new EmailClient();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should send an email notification', async () => {
    // Arrange
    const message = "Üdv a csoportban!";

    // Act
    await emailClient.sendNotification(message);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(message);
  });
});