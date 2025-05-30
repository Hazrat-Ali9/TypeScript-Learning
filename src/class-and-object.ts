{
  // -------------------------------
  // Example 1: Class and Object - Long Form Syntax
  // -------------------------------

  // Define a class representing an animal
  class Animal1 {
    name: string; // Name of the animal
    species: string; // Species of the animal (e.g., dog, cat)
    sound: string; // Sound the animal makes

    // Constructor to initialize properties
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    // Method to make the animal sound
    makeSound() {
      console.log(
        `The ${this.species} named "${this.name}" says: "${this.sound}"`
      );
    }
  }

  // Create instances of Animal1 using full property assignments
  const dog1 = new Animal1("dog miya", "dog", "Ghew Ghew");
  const cat1 = new Animal1("cat miya", "cat", "meaw meaw");

  // Log instances to console
  console.log("Animal1 Instances:");
  console.log("Dog1:", dog1);
  console.log("Cat1:", cat1);

  // Call the makeSound method for each instance
  dog1.makeSound();
  cat1.makeSound();

  // -------------------------------
  // Example 2: Class and Object - Shorthand Constructor Syntax
  // -------------------------------

  // Define a class using shorthand constructor with public modifiers
  class Animal2 {
    // Properties are automatically declared and assigned using constructor parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    // Method to make the animal sound
    makeSound() {
      console.log(
        `The ${this.species} named "${this.name}" says: "${this.sound}"`
      );
    }
  }

  // Create instances of Animal2 using shorthand constructor
  const dog2 = new Animal2("dog miya", "dog", "Ghew Ghew");
  const cat2 = new Animal2("cat miya", "cat", "meaw meaw");

  // Log instances to console
  console.log("\nAnimal2 Instances:");
  console.log("Dog2:", dog2);
  console.log("Cat2:", cat2);

  // Call the makeSound method for each instance
  dog2.makeSound();
  cat2.makeSound();
}
