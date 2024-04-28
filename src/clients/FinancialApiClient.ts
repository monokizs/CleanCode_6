import { IFinancialApiClient } from "../abstraction/clients/IFinancialApiClient";
import { Student } from "../models/Student";

export class FinancialApiClient implements IFinancialApiClient {
  async checkPaymentStatus(student: Student, courseName: string): Promise<boolean> {
    // Implement checking payment status through financial API
  }
}