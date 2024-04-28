import { Person } from "./Person";

export class Student extends Person {
  private registeredCourses: string[] = [];
  private assignedCourses: string[] = [];

  constructor(name: string, age: number) {
    super(name, age);
  }

  addRegisteredCourse(courseName: string): void {
    this.registeredCourses.push(courseName);
  }

  addAssignedCourse(courseName: string): void {
    this.assignedCourses.push(courseName);
  }
}