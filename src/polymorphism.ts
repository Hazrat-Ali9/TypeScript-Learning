{
  // Polymorphism in Object-Oriented Programming (OOP)
  // Polymorphism allows objects of different types to be treated through the same interface.
  // It enables different classes to define their own versions of methods.
  // Example 1: Different types of people sleep for different durations.

  // Base class
  class Person {
    getSleep() {
      console.log(`I am a person. I sleep for 8 hours.`);
    }
  }

  // Derived class: Student
  class Student extends Person {
    getSleep() {
      console.log(`I am a student. I sleep for 7 hours.`);
    }
  }

  // Derived class: Developer
  class Developer extends Person {
    getSleep() {
      console.log(`I am a developer. I sleep for 6 hours.`);
    }
  }

  // Function to get sleep information polymorphically
  const getSleepingHours = (person: Person) => {
    // This will call the appropriate method based on the actual object type
    person.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  console.log("Sleep logs for different person types:");
  getSleepingHours(person1); // Output: I am a person. I sleep for 8 hours.
  getSleepingHours(person2); // Output: I am a student. I sleep for 7 hours.
  getSleepingHours(person3); // Output: I am a developer. I sleep for 6 hours.

  // ------------------------------------------
  // Example 2: Different shapes have different ways of calculating area.

  // Base class
  class Shape {
    getArea(): number {
      return 0; // Default area
    }
  }

  // Derived class: Circle
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      const area = Math.PI * this.radius * this.radius;
      console.log(
        `Calculating area of Circle with radius ${this.radius}: ${area}`
      );
      return area;
    }
  }

  // Derived class: Rectangle
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      const area = this.height * this.width;
      console.log(
        `Calculating area of Rectangle ${this.height}x${this.width}: ${area}`
      );
      return area;
    }
  }

  // Function to get shape area polymorphically
  const getShapeArea = (shape: Shape) => {
    const area = shape.getArea();
    console.log(`Area: ${area}`);
  };

  const shape1 = new Shape(); // Default shape
  const shape2 = new Circle(10); // Circle with radius 10
  const shape3 = new Rectangle(10, 20); // Rectangle 10x20

  console.log("\nArea logs for different shape types:");
  getShapeArea(shape1); // Output: 0
  getShapeArea(shape2); // Output: 314.159...
  getShapeArea(shape3); // Output: 200
}
