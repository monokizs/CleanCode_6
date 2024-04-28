import { CourseStatistic } from "../src/models/CourseStatistic";


describe('CourseStatistic tests', () => {
  let courseStatistic: CourseStatistic;

  beforeEach(() => {
    // Arrange
    const courseName = 'CleanCode';
    const totalLectures = 6;
    const lecturesCompleted = 5;
    const progress = Math.round((lecturesCompleted / totalLectures) * 100);
    const lastAccessed = new Date();

    // Act
    courseStatistic = new CourseStatistic(courseName, totalLectures, lecturesCompleted, progress, lastAccessed);
  });

  it('should return the correct course name', () => {
    // Assert
    expect(courseStatistic.getCourseName()).toBe('CleanCode');
  });

  it('should return the correct total lectures count', () => {
    // Assert
    expect(courseStatistic.getTotalLectures()).toBe(6);
  });

  it('should return the correct lectures completed count', () => {
    // Assert
    expect(courseStatistic.getLecturesCompleted()).toBe(5);
  });

  it('should return the correct progress percentage', () => {
    // Assert
    expect(courseStatistic.getProgress()).toBe(83);
  });

  it('should return the correct last accessed date', () => {
    // Assert
    expect(courseStatistic.getLastAccessed()).toBeInstanceOf(Date);
  });
});