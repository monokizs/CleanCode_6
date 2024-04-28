import { IDBClient } from "../abstraction/clients/IDBClient";

export class DbClient implements IDBClient {
  async connect(): Promise<void> {
    try {
      // Dummy implementation always return Error
      throw new Error('Connection failed');
    } catch (error) {
      //console.log(`${(error as Error).message}`);
      throw new Error(`Failed to connect to the database: ${(error as Error).message}`);
    }
  }

  async disconnect(): Promise<void> {
    try {
      // Dummy implementation always return Error
      throw new Error('Disconnection failed');
    } catch (error) {
      //console.log(`${(error as Error).message}`);
      throw new Error(`Failed to disconnect from the database: ${(error as Error).message}`);
    }
  }

  async query(sql: string): Promise<any> {
    try {
      // Dummy implementation always return sql
        if (sql.trim() === "") {
          throw new Error("SQL query cannot be empty");
        }
        return sql;
    } catch (error) {
      //console.log(`${(error as Error).message}`);
      throw new Error(`Failed to execute query: ${(error as Error).message}`);
    }
  }
}