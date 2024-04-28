import { FinancialApiClient } from "../src/clients/FinancialApiClient";
import { Student } from "../src/models/Student";

describe('FinancialApiClient tests', () => {
  let financialApiClient: FinancialApiClient;

  beforeEach(() => {
    financialApiClient = new FinancialApiClient();
  });

  it('should return true for payment status', async () => {
    // Arrange
    const student = new Student('John Doe', 25);
    const courseName = 'Mathematics';

    // Act
    const paymentStatus = await financialApiClient.checkPaymentStatus(student, courseName);

    // Assert
    expect(paymentStatus).toBe(true);
  });
});