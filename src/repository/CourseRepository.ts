import { ICourseRepository } from "../abstraction/repository/ICourseRepository";
import { Course } from "../models/Course";
import { CourseStatistic } from "../models/CourseStatistic";
import { Student } from "../models/Student";
import { IDBClient } from "../abstraction/clients/IDBClient";

export class CourseRepository implements ICourseRepository {
  constructor(private dbClient: IDBClient) {}

  async addCourse(course: Course): Promise<void> {
    // TODO: Implement adding course to database
  }

  async addStudentToCourse(student: Student, courseName: string): Promise<void> {
    // TODO: Implement adding student to course in database
  }

  async getCourseByName(courseName: string): Promise<Course | undefined> {
    // TODO: Implement getting course by name from database
    // Dummy implementation: we always return undefined
    return undefined;
  }

  async getCourses(): Promise<Course[]> {
    // TODO: Implement getting all courses from database
    // Dummy implementation: we always return empty array
    return [];
  }

  async getCourseStatistics(courseName: string): Promise<CourseStatistic> {
    // TODO: Implement getting course statistics from database
    // Dummy implementation: we always return empty CourseStatistic object
    return new CourseStatistic('', 0, 0, 0, new Date());
  }
}