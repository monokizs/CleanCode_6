import { Student } from "../src/models/Student";

describe('Person tests', () => {
    it('should create a new Person object with valid name and age', () => {
      // Arrange
      const name = 'John';
      const age = 30;
  
      // Act
      const student = new Student(name, age);
  
      // Assert
      expect(student.getName()).toBe(name);
      expect(student.getAge()).toBe(age);
    });
  
    it('should throw an error when creating a Person object with empty name', () => {
      // Arrange
      const name = '';
      const age = 30;
  
      // Act & Assert
      expect(() => {
        new Student(name, age);
      }).toThrowError('Name cannot be empty');
    });
  });


describe('Student tests', () => {
    describe('Happy path',()=>{
        let student: Student;

        beforeEach(() => {
            // Arrange
            student = new Student('John', 30);
        });

        it('should return the registered courses correctly', () => {
            // Arrange
            student.addRegisteredCourse('CleanCode');
            student.addRegisteredCourse('Angular');
    
            // Act & Assert
            expect(student.getRegisteredCourses()).toEqual(['CleanCode', 'Angular']);
        });
    
        it('should return the assigned courses correctly', () => {
            // Arrange
            student.addAssignedCourse('CleanCode');
            student.addAssignedCourse('Angular');
    
            // Act & Assert
            expect(student.getAssignedCourses()).toEqual(['CleanCode', 'Angular']);
        });
    })

    describe('Error path',()=>{
        let student: Student;

        beforeEach(() => {
            // Arrange
            student = new Student('John', 30);
        });

        it('should throw an error when adding an empty registered course', () => {
            // Act & Assert
            expect(() => {
                student.addRegisteredCourse('');
            }).toThrowError('Course name cannot be empty');
        });
    
        it('should throw an error when adding an empty assigned course', () => {
            // Act & Assert
            expect(() => {
                student.addAssignedCourse('');
            }).toThrowError('Course name cannot be empty');
        });
    })
});