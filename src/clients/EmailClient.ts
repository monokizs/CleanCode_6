import { IMessageClient } from "../abstraction/clients/IMessageClient";

export class EmailClient implements IMessageClient {
  async sendNotification(message: string): Promise<void> {
    // TODO: Implement sending email notification
  }
}