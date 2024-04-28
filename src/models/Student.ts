import { Person } from "./Person";

export class Student extends Person {
  private registeredCourses: string[] = [];
  private assignedCourses: string[] = [];

  constructor(name: string, age: number) {
    super(name, age);
  }

  addRegisteredCourse(courseName: string): void {
    if (courseName.trim() === "") {
      throw new Error("Course name cannot be empty");
    }
    this.registeredCourses.push(courseName);
  }

  getRegisteredCourses(): string[] {
    return this.registeredCourses;
  }

  addAssignedCourse(courseName: string): void {
    if (courseName.trim() === "") {
      throw new Error("Course name cannot be empty");
    }
    this.assignedCourses.push(courseName);
  }

  getAssignedCourses(): string[] {
    return this.assignedCourses;
  }
}