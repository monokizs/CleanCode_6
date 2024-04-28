import { IMessageClient } from "../abstraction/clients/IMessageClient";

export class PushNotificationClient implements IMessageClient {
  async sendNotification(message: string): Promise<void> {
    // Implement sending push notification
  }
}