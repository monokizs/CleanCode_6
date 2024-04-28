import { CourseRepository } from "../src/repository/CourseRepository";
import { Course } from "../src/models/Course";
import { CourseStatistic } from "../src/models/CourseStatistic";
import { Student } from "../src/models/Student";
import { IDBClient } from "../src/abstraction/clients/IDBClient";

describe('CourseRepository', () => {
  let courseRepository: CourseRepository;
  let dbClientMock: IDBClient;

  beforeEach(() => {
    dbClientMock = {
      connect: jest.fn(),
      disconnect: jest.fn(),
      query: jest.fn()
    };
    courseRepository = new CourseRepository(dbClientMock);
  });

  describe('addCourse', () => {
    it('should add a course to the database', async () => {
      // Arrange
      const course = new Course('CleanCode', new Date(), 5, 100);

      // Act
      await courseRepository.addCourse(course);

      // Assert
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.stringContaining('INSERT INTO courses'));
    });

    it('should throw an error when adding an empty course', async () => {
      // Arrange
      const emptyCourse = new Course('', new Date(), 0, 0);

      // Act & Assert
      await expect(courseRepository.addCourse(emptyCourse)).rejects.toThrowError('Course empty error');
    });
  });

  describe('addStudentToCourse', () => {
    it('should add a student to the course in the database', async () => {
      // Arrange
      const student = new Student('John Doe', 123);
      const courseName = 'Test Course';

      // Act
      await courseRepository.addStudentToCourse(student, courseName);

      // Assert
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.stringContaining('INSERT INTO course_students'));
    });

    it('should throw an error when course name is empty', async () => {
      // Arrange
      const student = new Student('John Doe', 123);
      const courseName = '';

      // Act & Assert
      await expect(courseRepository.addStudentToCourse(student, courseName)).rejects.toThrowError('Empty coursename error');
    });
  });

  describe('getCourseByName', () => {
    it('should return undefined when course not found', async () => {
      // Act
      const result = await courseRepository.getCourseByName('Nonexistent Course');

      // Assert
      expect(result).toBeUndefined();
    });
  });

  describe('getCourses', () => {
    it('should return an empty array when no courses found', async () => {
      // Act
      const result = await courseRepository.getCourses();

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('getCourseStatistics', () => {
    it('should return a CourseStatistic object with default values', async () => {
      // Act
      const result = await courseRepository.getCourseStatistics('Test Course');

      // Assert
      expect(result).toEqual(new CourseStatistic('', 0, 0, 0, expect.any(Date)));
    });
  });
});