import { IDBClient } from "../abstraction/clients/IDBClient";

export class DbClient implements IDBClient {
  async connect(): Promise<void> {
    throw new Error('Connection failed');
  }

  async disconnect(): Promise<void> {
    throw new Error('Disconnection failed');
  }

  async query(sql: string): Promise<any> {
    if (sql.trim() === "") {
      throw new Error("SQL query cannot be empty");
    }
    return sql;
  }
}