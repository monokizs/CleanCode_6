import { IPaymentService } from "../abstraction/services/IPaymentService";
import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient";
import { Student } from "../models/Student";

export class PaymentService implements IPaymentService {
  constructor(private financialApiClient: IFinancialApiClient) {}

  public async getIsOrderPaid(student: Student, courseName: string): Promise<boolean> {
    return await this.financialApiClient.checkPaymentStatus(student, courseName);
  }
}