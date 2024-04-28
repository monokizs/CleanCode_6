import { ICourseRepository } from "../src/abstraction/repository/ICourseRepository";
import { INotificationService } from "../src/abstraction/services/INotificationService";
import { IPaymentService } from "../src/abstraction/services/IPaymentService";
import { Course } from "../src/models/Course";
import { CourseStatistic } from "../src/models/CourseStatistic";
import { Student } from "../src/models/Student";
import { CourseService } from "../src/services/CourseService";
import { mock, mockReset } from 'jest-mock-extended';

describe('CourseService tests', () => {
  let courseService: CourseService;
  let courseRepositoryMock: ICourseRepository;
  let paymentServiceMock: IPaymentService;
  let notificationServiceMock: INotificationService;
  

  beforeEach(() => {
    courseRepositoryMock = {
      addCourse: jest.fn(),
      getCourses: jest.fn(),
      getCourseByName: jest.fn(),
      getCourseStatistics: jest.fn(),
      addStudentToCourse: jest.fn()
    };
    paymentServiceMock = {
      getIsOrderPaid: jest.fn()
    };
    notificationServiceMock = {
      sendNotification: jest.fn()
    };
    courseService = new CourseService(courseRepositoryMock, paymentServiceMock, notificationServiceMock);
  });

  it('should add a course', async () => {
    // Arrange
    const course = new Course('Mathematics', new Date(), 12, 5000);

    // Act
    await courseService.addCourse(course);

    // Assert
    expect(courseRepositoryMock.addCourse).toHaveBeenCalledWith(course);
  });

  it('should get all students from courses', async () => {
    // Arrange
    const student1 = new Student('John', 25);
    const student2 = new Student('Alice', 30);
    const course1 = new Course('Mathematics', new Date(), 12, 5000);
    const course2 = new Course('Physics', new Date(), 10, 4500);
    course1.addStudent(student1);
    course2.addStudent(student2);
    courseRepositoryMock.getCourses = jest.fn().mockResolvedValue([course1, course2]);

    // Act
    const result = await courseService.getStudents();

    // Assert
    expect(result).toContain(student1);
    expect(result).toContain(student2);
  });

  it('should add a student to a course if payment is made', async () => {
    // Arrange
    const student = new Student('John', 25);
    const courseName = 'Mathematics';
    const course = new Course(courseName, new Date(), 12, 5000);
    courseRepositoryMock.getCourseByName = jest.fn().mockResolvedValue(course);
    paymentServiceMock.getIsOrderPaid = jest.fn().mockResolvedValue(true);
    const addStudentSpy = jest.spyOn(course, 'addStudent');

    // Act
    let resolvedCourse;
    await courseRepositoryMock.getCourseByName(courseName).then(c => resolvedCourse = c);
    await courseService.addStudentToCourse(student, courseName);

    // Assert
    expect(addStudentSpy).toHaveBeenCalledWith(student);
    expect(notificationServiceMock.sendNotification).toHaveBeenCalledWith(`${student.getName()} student was added to course.`);
  });

  it('should throw an error when adding a student to a non-existing course', async () => {
    // Arrange
    const student = new Student('John', 25);
    const courseName = 'NonExistingCourse';
    courseRepositoryMock.getCourseByName = jest.fn().mockResolvedValue(undefined);

    // Act & Assert
    await expect(courseService.addStudentToCourse(student, courseName)).rejects.toThrowError('Course not found');
  });

  it('should throw an error when adding a student to a course without payment', async () => {
    // Arrange
    const student = new Student('John', 25);
    const courseName = 'Mathematics';
    const course = new Course(courseName, new Date(), 12, 5000);
    courseRepositoryMock.getCourseByName = jest.fn().mockResolvedValue(course);
    paymentServiceMock.getIsOrderPaid = jest.fn().mockResolvedValue(false);

    // Act & Assert
    await expect(courseService.addStudentToCourse(student, courseName)).rejects.toThrowError('Course is not yet paid by Student.');
  });

  it('should get course statistics', async () => {
    // Arrange
    const courseName = 'Mathematics';
    const courseStatistic = new CourseStatistic(courseName, 20, 15, 75, new Date());
    courseRepositoryMock.getCourseStatistics = jest.fn().mockResolvedValue(courseStatistic);

    // Act
    const result = await courseService.getCourseStatistics(courseName);

    // Assert
    expect(result).toEqual(courseStatistic);
  });
});