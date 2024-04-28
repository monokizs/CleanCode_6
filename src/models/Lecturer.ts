import { Person } from "./Person";

export class Lecturer extends Person {
  private subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    if (subject.trim() === "") {
      throw new Error("Subject cannot be empty");
    }
    this.subject = subject;
  }

  getSubject(): string {
    return this.subject;
  }
}