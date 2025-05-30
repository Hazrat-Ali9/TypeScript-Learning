{
  // -----------------------------------------------
  // Type Guard using `instanceof` in TypeScript
  // -----------------------------------------------

  // Define a base class: Animal
  class Animal {
    name: string; // Name of the animal (e.g., "Tom")
    species: string; // Type of animal (e.g., "cat", "dog")

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    // Generic sound method (can be overridden or used as fallback)
    makeSound() {
      console.log(`${this.name} is making a generic animal sound`);
    }
  }

  // Subclass: Dog extends Animal
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Unique method for Dog
    makeBark() {
      console.log(`${this.name} is barking: "Woof! Woof!"`);
    }
  }

  // Subclass: Cat extends Animal
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Unique method for Cat
    makeMeaw() {
      console.log(`${this.name} is meowing: "Meow~"`);
    }
  }

  // ---------------------------------------
  // Create instances of Dog and Cat
  // ---------------------------------------
  const dog = new Dog("Dog Vai", "Dog");
  const cat = new Cat("Cat Vai", "Cat");

  // ---------------------------------------
  // Type Guard Using `instanceof` (Direct)
  // ---------------------------------------
  const getAnimal1 = (animal: Animal) => {
    console.log("Checking animal with direct instanceof guard...");

    if (animal instanceof Dog) {
      console.log(" It's a Dog!");
      animal.makeBark();
    } else if (animal instanceof Cat) {
      console.log(" It's a Cat!");
      animal.makeMeaw();
    } else {
      console.log(" Unknown Animal Type");
      animal.makeSound();
    }
  };

  console.log("\n--- getAnimal1 Tests ---");
  getAnimal1(dog); // Dog-specific logic
  getAnimal1(cat); // Cat-specific logic

  // ------------------------------------------------
  // Custom Type Predicate Functions for Reusability
  // ------------------------------------------------
  // Type predicate: Check if Animal is Dog
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  // Type predicate: Check if Animal is Cat
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  // ---------------------------------------
  // Type Guard Using Type Predicates
  // ---------------------------------------
  const getAnimal2 = (animal: Animal) => {
    console.log("Checking animal using custom type predicate...");

    if (isDog(animal)) {
      console.log(" Detected a Dog using predicate.");
      animal.makeBark();
    } else if (isCat(animal)) {
      console.log(" Detected a Cat using predicate.");
      animal.makeMeaw();
    } else {
      console.log(" Detected unknown animal. Using fallback.");
      animal.makeSound();
    }
  };

  console.log("\n--- getAnimal2 Tests ---");
  getAnimal2(dog); // Should bark
  getAnimal2(cat); // Should meow

  // ---------------------------------------
  // Try With a Generic Animal (not Dog or Cat)
  // ---------------------------------------
  const rabbit = new Animal("Jhankar Vai", "Rabbit");

  console.log("\n--- Unknown Animal Test ---");
  getAnimal1(rabbit);
  getAnimal2(rabbit);
}
