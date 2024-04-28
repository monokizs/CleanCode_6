import { DbClient } from "../src/clients/DbClient";

describe('DbClient tests', () => {
  let dbClient: DbClient;

  beforeEach(() => {
    dbClient = new DbClient();
  });

  describe('Connect', () => {
    it('should throw error when connection fails', async () => {
        // Act & Assert
        await expect(dbClient.connect()).rejects.toThrowError('Connection failed');
      });
    /*it('should throw error when connection fails', async () => {
      // Arrange
      jest.spyOn(dbClient as any, 'connect').mockRejectedValue(new Error('Connection failed'));

      // Act & Assert
      await expect(dbClient.connect()).rejects.toThrowError('Connection failed');
    });*/
  });

  describe('Disconnect', () => {
    it('should throw error when disconnection fails', async () => {
        // Act & Assert
        await expect(dbClient.disconnect()).rejects.toThrowError('Disconnection failed');
      });
    /*it('should throw error when disconnection fails', async () => {
      // Arrange
      jest.spyOn(dbClient as any, 'disconnect').mockRejectedValue(new Error('Disconnection failed'));

      // Act & Assert
      await expect(dbClient.disconnect()).rejects.toThrowError('Disconnection failed');
    });*/
  });

  describe('Query', () => {
    it('should throw error when SQL query is empty', async () => {
      // Arrange
      const emptySql = '';

      // Act & Assert
      await expect(dbClient.query(emptySql)).rejects.toThrowError('SQL query cannot be empty');
    });

    it('should return SQL query result', async () => {
      // Arrange
      const sql = 'SELECT * FROM table';

      // Act
      const result = await dbClient.query(sql);

      // Assert
      expect(result).toBe(sql);
    });
  });
});