import { Student } from "../../models/Student";

export interface IFinancialApiClient {
    checkPaymentStatus(student: Student, courseName: string): Promise<boolean>;
  }