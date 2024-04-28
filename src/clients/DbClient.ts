import { IDBClient } from "../abstraction/clients/IDBClient";

export class DbClient implements IDBClient {
  async connect(): Promise<void> {
    // TODO: Implement connection to the database
  }

  async disconnect(): Promise<void> {
    // TODO: Implement disconnection from the database
  }

  async query(sql: string): Promise<any> {
    // TODO: Implement query execution
  }
}