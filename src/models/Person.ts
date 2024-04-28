export abstract class Person {
    constructor(private name: string, private age: number) {
        if (name.trim() === "") {
          throw new Error("Name cannot be empty");
      }
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }

    getAge(): number {
      return this.age;
    }
  }
  