export class CourseStatistic {
  private courseName: string;
  private totalLectures: number;
  private lecturesCompleted: number;
  private progress: number;
  private lastAccessed: Date;

  constructor(courseName: string, totalLectures: number, lecturesCompleted: number, progress: number, lastAccessed: Date) {
    this.courseName = courseName;
    this.totalLectures = totalLectures;
    this.lecturesCompleted = lecturesCompleted;
    this.progress = progress;
    this.lastAccessed = lastAccessed;
  }

  getCourseName(): string {
    return this.courseName;
  }

  getTotalLectures(): number {
    return this.totalLectures;
  }

  getLecturesCompleted(): number {
    return this.lecturesCompleted;
  }

  getProgress(): number {
    return this.progress;
  }

  getLastAccessed(): Date {
    return this.lastAccessed;
  }
}