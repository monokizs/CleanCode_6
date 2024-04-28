import { ICourseRepository } from "../abstraction/repository/ICourseRepository";
import { Course } from "../models/Course";
import { CourseStatistic } from "../models/CourseStatistic";
import { Student } from "../models/Student";
import { IDBClient } from "../abstraction/clients/IDBClient";

export class CourseRepository implements ICourseRepository {
  constructor(private dbClient: IDBClient) {}

  async addCourse(course: Course): Promise<void> {
    if (course.getCourseName() == '') {
      throw new Error("Course empty error");
    }
  
    const sql = `INSERT INTO courses`;
    await this.dbClient.query(sql);
  }

  async addStudentToCourse(student: Student, courseName: string): Promise<void> {
    try {
      if (!courseName) {
        throw new Error("Empty coursename error");
      }
      const sql = `INSERT INTO course_students`;
      await this.dbClient.query(sql);
    } catch (error) {
      throw new Error(`Failed to add student to course in the database: ${(error as Error).message}`);
    }
  }

  async getCourseByName(courseName: string): Promise<Course | undefined> {
    // Dummy implementation: we always return undefined
    return undefined;
  }

  async getCourses(): Promise<Course[]> {
    // Dummy implementation: we always return empty array
    return [];
  }

  async getCourseStatistics(courseName: string): Promise<CourseStatistic> {
    // Dummy implementation: we always return empty CourseStatistic object
    return new CourseStatistic('', 0, 0, 0, new Date());
  }
}