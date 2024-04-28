import { Lecturer } from "../src/models/Lecturer";


describe('Lecturer tests', () => {
  let lecturer: Lecturer;

  beforeEach(() => {
    // Arrange
    lecturer = new Lecturer('Bob', 40, 'CleanCode');
  });

  describe('Happy path', () => {
    it('should create a new Lecturer object with valid name, age, and subject', () => {
        // Act & Assert
        expect(lecturer.getName()).toBe('Bob');
        expect(lecturer.getAge()).toBe(40);
        expect(lecturer.getSubject()).toBe('CleanCode');
    });
  });
  
  describe('Error path',()=>{
    it('should throw an error when creating a Lecturer object with empty name', () => {
        // Act & Assert
        expect(() => {
        new Lecturer('', 40, 'CleanCode');
        }).toThrowError('Name cannot be empty');
    });

    it('should throw an error when creating a Lecturer object with empty subject', () => {
        // Act & Assert
        expect(() => {
        new Lecturer('Bob', 40, '');
        }).toThrowError('Subject cannot be empty');
    });
  });
});