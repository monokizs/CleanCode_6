import { IMessageClient } from "../abstraction/clients/IMessageClient";
import { INotificationService } from "../abstraction/services/INotificationService";

export class NotificationService implements INotificationService {
  constructor(private messageClients: IMessageClient[]) {}

  public async sendNotification(message: string): Promise<void> {
    for (const client of this.messageClients) {
      await client.sendNotification(message);
    }
  }
}