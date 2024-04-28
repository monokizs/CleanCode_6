import { IDBClient } from "../abstraction/clients/IDBClient";

export class DbClient implements IDBClient {
  async connect(): Promise<void> {
    // Implement connection to the database
  }

  async disconnect(): Promise<void> {
    // Implement disconnection from the database
  }

  async query(sql: string): Promise<any> {
    // Implement query execution
  }
}