import { Course } from "../../models/Course"; 
import { CourseStatistic } from "../../models/CourseStatistic"; 
import { Student } from "../../models/Student"; 

export interface ICourseRepository {
    addCourse(course: Course): Promise<void>;
    addStudentToCourse(student: Student, courseName: string): Promise<void>;
    getCourseByName(courseName: string): Promise<Course | undefined>;
    getCourses(): Promise<Course[]>;
    getCourseStatistics(courseName: string): Promise<CourseStatistic>;
  }