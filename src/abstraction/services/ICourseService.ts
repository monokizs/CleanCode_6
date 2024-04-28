import { Course } from "../../models/Course";
import { Student } from "../../models/Student";
import { CourseStatistic } from "../../models/CourseStatistic";

export interface ICourseService {
  addCourse(course: Course): Promise<void>;
  getStudents(): Promise<Student[]>;
  addStudentToCourse(student: Student, courseName: string): Promise<void>;
  getCourseStatistics(courseName: string): Promise<CourseStatistic>;
}