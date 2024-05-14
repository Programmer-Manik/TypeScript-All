{
  // Inheritance In OOP
  class Parent {
    constructor(
      public name: string,
      public age: string,
      public address: string
    ) {}
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: string, address: string) {
      super(name, age, address);
    }
  }
  const Student1 = new Student("manik", "22", "rode");

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: string,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numberOfHours: number) {
      console.log(`${this.name}will take ${numberOfHours}`);
    }
  }
  const Teacher1 = new Teacher("manik", "40", "Dhaka", "Pro");
}
