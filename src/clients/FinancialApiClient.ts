import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient";
import { Student } from "../models/Student";

export class FinancialApiClient implements IFinancialApiClient {
  async checkPaymentStatus(student: Student, courseName: string): Promise<boolean> {
    // TODO: Implement checking payment status through financial API
    // Dummy implementation: we always return true
    return true;
  }
}