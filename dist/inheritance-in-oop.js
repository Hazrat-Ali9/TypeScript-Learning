"use strict";
{
    // -------------------------------------------
    // Inheritance in Object-Oriented TypeScript
    // -------------------------------------------
    // Base class representing a generic person
    class Person {
        // Constructor to initialize a person's basic info
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        // Method that simulates how long the person will sleep
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours} hours.`);
        }
    }
    // -------------------------------
    // Student class (inherits from Person)
    // -------------------------------
    class Student extends Person {
        // No additional properties or methods, but inherits everything from Person
        // Constructor passes parameters to the base class constructor using `super()`
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    // Create a Student object
    const student1 = new Student("Rafi", "20", "Dhaka");
    // Log the student object
    console.log("Student Info:", student1);
    // Call inherited method
    student1.getSleep(8);
    // -------------------------------
    // Teacher class (inherits from Person)
    // -------------------------------
    class Teacher extends Person {
        // Constructor passes common values to the base class and sets the new property
        constructor(name, age, address, designation) {
            super(name, age, address); // Call the parent class constructor
            this.designation = designation;
        }
        // New method specific to Teacher class
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} class(es).`);
        }
    }
    // Create a Teacher object
    const teacher1 = new Teacher("Munna Sir", "40", "Chattogram", "Math Teacher");
    // Log the teacher object
    console.log("Teacher Info:", teacher1);
    // Call methods (inherited and unique)
    teacher1.getSleep(6); // Inherited from Person
    teacher1.takeClass(3); // Unique to Teacher
}
