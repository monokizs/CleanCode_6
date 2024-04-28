export abstract class Person {
    constructor(private name: string, private age: number) {}
  
    getName(): string {
      return this.name;
    }
  }
  