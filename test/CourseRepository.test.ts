import { CourseRepository } from "../src/repository/CourseRepository";
import { IDBClient } from "../src/abstraction/clients/IDBClient";
import { Course } from "../src/models/Course";
import { Student } from "../src/models/Student";

// Mocking the IDBClient interface
const dbClientMock: IDBClient = {
  async connect(): Promise<void> {
    // Mocked connect function, no actual implementation needed for testing
    return;
  },
  async disconnect(): Promise<void> {
    // Mocked disconnect function, no actual implementation needed for testing
    return;
  },
  async query(sql: string): Promise<any> {
    // Mocked query function, no actual implementation needed for testing
    return;
  }
};

describe('CourseRepository', () => {
  let courseRepository: CourseRepository;

  beforeEach(() => {
    // Create a new instance of CourseRepository with the mocked IDBClient
    courseRepository = new CourseRepository(dbClientMock);
  });

  describe('addCourse', () => {
   /* it('should throw an error when adding an empty course', async () => {
        // Arrange
        const emptyCourse = new Course('', new Date(), 0, 0);
      
        // Act & Assert
        await expect(courseRepository.addCourse(emptyCourse)).rejects.toThrowError('Course empty error');
      });*/

    it('should add a course to the database', async () => {
      // Arrange
      const course = new Course('Test Course', new Date(), 5, 100);

      // Act & Assert
      await expect(courseRepository.addCourse(course)).resolves.not.toThrow();
    });
  });

  describe('addStudentToCourse', () => {
    it('should throw an error when adding an empty course name', async () => {
      // Arrange


      // Act & Assert
      await expect(courseRepository.addStudentToCourse(new Student('John',30), '')).rejects.toThrowError('Empty coursename error');
    });

    it('should add a student to the course in the database', async () => {
      // Arrange
      const student = new Student('John Doe', 123);
      const courseName = 'Test Course';

      // Act & Assert
      await expect(courseRepository.addStudentToCourse(student, courseName)).resolves.not.toThrow();
    });
  });
});