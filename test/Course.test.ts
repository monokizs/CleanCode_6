import { Course } from "../src/models/Course";
import { Student } from "../src/models/Student";


describe('Course tests', () => {
  let course: Course;
  const startDate = new Date();
  const courseName = 'CleanCode';
  const lengthInWeeks = 12;
  const costInHuf = 60000;

  beforeEach(() => {
    // Arrange
    course = new Course(courseName, startDate, lengthInWeeks, costInHuf);
  });

  it('should add a student to the course', () => {
    // Arrange
    const student = new Student('John', 25);

    // Act
    course.addStudent(student);

    // Assert
    expect(course.getStudents()).toContain(student);
  });

  it('should return the list of students in the course', () => {
    // Arrange
    const student1 = new Student('John', 25);
    const student2 = new Student('Bob', 30);
    course.addStudent(student1);
    course.addStudent(student2);

    // Act
    const students = course.getStudents();

    // Assert
    expect(students.length).toBe(2);
    expect(students).toContain(student1);
    expect(students).toContain(student2);
  });
});