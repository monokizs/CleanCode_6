import { IFinancialApiClient } from "../src/abstraction/clients/IFinancialApiClient";
import { Student } from "../src/models/Student";
import { PaymentService } from "../src/services/PaymentService";

describe('PaymentService tests', () => {
    let paymentService: PaymentService;
    let financialApiClientMock: IFinancialApiClient;
  
    beforeEach(() => {
      // Mock financial API client
      financialApiClientMock = {
        checkPaymentStatus: jest.fn()
      };
      paymentService = new PaymentService(financialApiClientMock);
    });
  
    it('should return true if order is paid', async () => {
      // Arrange
      const student = new Student('John', 25);
      const courseName = 'Math';
      financialApiClientMock.checkPaymentStatus=jest.fn().mockResolvedValue(true);
  
      // Act
      const result = await paymentService.getIsOrderPaid(student, courseName);
  
      // Assert
      expect(result).toBe(true);
      expect(financialApiClientMock.checkPaymentStatus).toHaveBeenCalledWith(student, courseName);
    });
  
    it('should return false if order is not paid', async () => {
      // Arrange
      const student = new Student('Alice', 28);
      const courseName = 'Science';
      financialApiClientMock.checkPaymentStatus=jest.fn().mockResolvedValue(false);
  
      // Act
      const result = await paymentService.getIsOrderPaid(student, courseName);
  
      // Assert
      expect(result).toBe(false);
      expect(financialApiClientMock.checkPaymentStatus).toHaveBeenCalledWith(student, courseName);
    });
  });