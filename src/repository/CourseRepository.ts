import { ICourseRepository } from "../abstraction/repository/ICourseRepository";
import { Course } from "../models/Course";
import { CourseStatistic } from "../models/CourseStatistic";
import { Student } from "../models/Student";
import { IDBClient } from "../abstraction/clients/IDBClient";

export class CourseRepository implements ICourseRepository {
  constructor(private dbClient: IDBClient) {}

  async addCourse(course: Course): Promise<void> {
    // Implement adding course to database
  }

  async addStudentToCourse(student: Student, courseName: string): Promise<void> {
    // Implement adding student to course in database
  }

  async getCourseByName(courseName: string): Promise<Course | undefined> {
    // Implement getting course by name from database
  }

  async getCourses(): Promise<Course[]> {
    // Implement getting all courses from database
  }

  async getCourseStatistics(courseName: string): Promise<CourseStatistic> {
    // Implement getting course statistics from database
  }
}