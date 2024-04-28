import { Course } from "../models/Course";
import { Student } from "../models/Student";
import { ICourseRepository } from "../abstraction/repository/ICourseRepository";
import { IPaymentService } from "../abstraction/services/IPaymentService";
import { INotificationService } from "../abstraction/services/INotificationService";
import { ICourseService } from "../abstraction/services/ICourseService";
import { CourseStatistic } from "../models/CourseStatistic";

export class CourseService implements ICourseService {
  constructor(
    private courseRepository: ICourseRepository,
    private paymentService: IPaymentService,
    private notificationService: INotificationService
  ) {}

  public async addCourse(course: Course): Promise<void> {
    await this.courseRepository.addCourse(course);
  }

  public async getStudents(): Promise<Student[]> {
    const courses = await this.courseRepository.getCourses();
    const students: Student[] = [];

    courses.forEach(course => {
      students.push(...course.getStudents());
    });

    return students;
  }

  public async addStudentToCourse(student: Student, courseName: string): Promise<void> {
    const course = await this.courseRepository.getCourseByName(courseName);
    if (!course) {
      throw new Error('Course not found');
    }
    const isCoursePaidByStudent = await this.paymentService.getIsOrderPaid(student, courseName);
    if (!isCoursePaidByStudent) {
      throw new Error('Course is not yet paid by Student.');
    }
    course.addStudent(student);
    await this.notificationService.sendNotification(`${student.getName()} student was added to course.`);
  }

  public async getCourseStatistics(courseName: string): Promise<CourseStatistic> {
    return await this.courseRepository.getCourseStatistics(courseName);
  }
}