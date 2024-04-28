import { IMessageClient } from "../abstraction/clients/IMessageClient";

export class PushNotificationClient implements IMessageClient {
  async sendNotification(message: string): Promise<void> {
    // TODO: Implement sending push notification
  }
}