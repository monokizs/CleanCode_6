import { Student } from "../../models/Student";

export interface IPaymentService {
  getIsOrderPaid(student: Student, courseName: string): Promise<boolean>;
}