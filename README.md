# 🐊 Hazrat Ali

# 🦋 Programmer || Software Engineering 

# 🐲 Typescript Learning

This guide provides an overview of the key concepts in TypeScript, along with practical examples and detailed explanations. Whether you are a beginner or someone looking to refresh your knowledge, this guide covers the essentials of TypeScript, including data types, functions, destructuring, operators, and advanced types.

---

## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript

```bash
tsc --init
```

### 2. Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install ts-node-dev

```bash
npm install -g ts-node-dev
```

### 4. Run the project

```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---

## Folder Structure

```
2k25-2k25-Object-Oriented-typescript/
├── src/             # All TypeScript source files
│   ├── index.ts     # Entry point
│   └── examples/    # Example scripts (types, functions, etc.)
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # This documentation file
```

---

# Welcome to Object-Oriented TypeScript

Welcome back to the next step in your TypeScript journey!

In this module, you'll dive into the heart of Object-Oriented Programming (OOP). Here's what you'll explore:

### Introduction to Object-Oriented Programming

We will introduce you to object-oriented programming. You'll learn what OOP is and how OOP principles help structure and maintain complex codebases.

### Class and Object

Classes serve as blueprints for creating objects, which are instances that encapsulate both state and behavior. You'll learn how to define classes with properties and methods, create objects from them, and understand why this pattern is crucial for building scalable and maintainable applications.

### Inheritance in OOP

Continuing our exploration of OOP, we’ll talk about inheritance, one of the most powerful tools for code reuse. Inheritance allows a class to inherit properties and methods from another class, creating a parent-child relationship.

### Type Guard using `typeof` & `in`

When working with dynamic types, it's crucial to ensure you're dealing with the expected type. TypeScript offers type guards to help with this. You'll explore how to use the `typeof` operator and the `in` keyword to safely implement conditional logic based on variable types.

### Type Guard using `instanceof`

Building on your knowledge of type guards, you'll explore the `instanceof` operator — a powerful tool for checking whether an object is an instance of a specific class, especially useful in class hierarchies.

### Access Modifiers

Access modifiers are key to controlling the visibility of class members. You’ll learn about `public`, `private`, and `protected` in TypeScript, and how they help enforce encapsulation.

### Getter and Setter

Take control of how your class properties are accessed and modified! You'll learn how to define getters and setters in TypeScript and explore their practical benefits.

### Static Members in OOP

Static properties and methods belong to the class itself, not to instances. We'll show you how to declare and use `static` members in TypeScript effectively.

### Polymorphism

Polymorphism allows different classes to be treated as if they are the same through a shared interface or base class. You’ll implement polymorphism and understand its importance in flexible application design.

### Abstraction in OOP

Abstraction hides implementation details and exposes only essential features. You'll learn to create abstract classes and interfaces to define clear and robust contracts in your code.

### Encapsulation in OOP

Encapsulation ensures that internal class details are hidden and protected. We’ll demonstrate how to implement encapsulation using private properties and access modifiers.

---

With this knowledge, you can confidently build complex applications that are both maintainable and resilient. Keep practicing and experimenting with these concepts. The more you apply them, the more intuitive they will become!

---

## Class and Object in TypeScript

In Object-Oriented Programming (OOP), **classes** are blueprints for creating **objects**. Each object created from a class can have its own data (**properties**) and functionality (**methods**).

Let’s break this down with examples and explanations.

---

### Basic Example of a Class

```ts
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(
      `The ${this.species} named "${this.name}" says: "${this.sound}"`
    );
  }
}

const dog = new Animal("Dog Miya", "dog", "Ghew Ghew");
const cat = new Animal("Cat Miya", "cat", "Meaw Meaw");

dog.makeSound(); // Output: The dog named "Dog Miya" says: "Ghew Ghew"
cat.makeSound(); // Output: The cat named "Cat Miya" says: "Meaw Meaw"
```

### Explanation:

- `class Animal` defines a class with 3 properties (`name`, `species`, `sound`) and 1 method (`makeSound()`).
- The `constructor` initializes the object when created using the `new` keyword.
- The `makeSound()` method logs a sentence using the object's data.

---

### Using Constructor Shorthand

TypeScript allows a shorthand for defining and assigning properties directly from the constructor:

```ts
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(
      `The ${this.species} named "${this.name}" says: "${this.sound}"`
    );
  }
}

const dog = new Animal("Dog Miya", "dog", "Ghew Ghew");
const cat = new Animal("Cat Miya", "cat", "Meaw Meaw");

dog.makeSound(); // Output: The dog named "Dog Miya" says: "Ghew Ghew"
cat.makeSound(); // Output: The cat named "Cat Miya" says: "Meaw Meaw"
```

### Benefits of Constructor Shorthand:

- Less code.
- Automatically creates and assigns properties with `public`, `private`, or `protected` access modifiers.

---

### Logging and Debugging

You can always inspect your objects and debug like this:

```ts
console.log(dog); // Output: Animal { name: 'Dog Miya', species: 'dog', sound: 'Ghew Ghew' }
dog.makeSound(); // Output: The dog named "Dog Miya" says: "Ghew Ghew"
```

This is very helpful when working on complex object hierarchies or when you want to ensure data is passed correctly.

---

### Why Use Classes?

- Reuse code by creating multiple instances (objects).
- Group related data and behaviors.
- Helps with large-scale, maintainable application design.

---

### Class vs Object Summary

| Feature    | Class                         | Object                                   |
| ---------- | ----------------------------- | ---------------------------------------- |
| Definition | A blueprint or template       | An instance of a class                   |
| Use        | Define structure and behavior | Access or manipulate specific data       |
| Keyword    | `class`                       | `new ClassName(...)` to create an object |

---

### Practice Challenge

Try defining your own class called `Car` with the following:

- Properties: `brand`, `model`, `year`
- Method: `displayInfo()` that logs `"Brand Model (Year)"`

<details>
<summary>Example solution</summary>

```ts
class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  displayInfo() {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.displayInfo(); // Output: Toyota Corolla (2020)
```

</details>

---

## Inheritance in TypeScript

**Inheritance** is a core principle of Object-Oriented Programming (OOP) that allows one class to inherit the properties and methods of another. This promotes **code reuse**, **organization**, and **scalability**.

---

### Base Class (Parent)

A **base class** defines common properties and methods that can be reused by **derived classes** (child classes).

```ts
class Person {
  name: string;
  age: string;
  address: string;

  constructor(name: string, age: string, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} will sleep for ${numberOfHours} hours.`);
  }
}
```

---

### Derived Class (Child)

You can create new classes that **extend** the base class using the `extends` keyword.

```ts
class Student extends Person {
  constructor(name: string, age: string, address: string) {
    super(name, age, address); // Call base class constructor
  }
}
```

### Another Derived Class with Extra Features

You can add additional properties and methods to a subclass.

```ts
class Teacher extends Person {
  designation: string;

  constructor(name: string, age: string, address: string, designation: string) {
    super(name, age, address); // Inherit base properties
    this.designation = designation;
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass} class(es).`);
  }
}
```

---

### Full Example with Console Output

```ts
// Create a Student
const student1 = new Student("Hazrat", "23", "Dhaka");
console.log("Student Info:", student1);
// Output: Student Info: Student { name: 'Rafi', age: '20', address: 'Dhaka' }

student1.getSleep(8);
// Output: Rafi will sleep for 8 hours.

// Create a Teacher
const teacher1 = new Teacher("Munna Sir", "40", "Chattogram", "Math Teacher");
console.log("Teacher Info:", teacher1);
// Output: Teacher Info: Teacher { name: 'Munna Sir', age: '40', address: 'Chattogram', designation: 'Math Teacher' }

teacher1.getSleep(6);
// Output: Munna Sir will sleep for 6 hours.

teacher1.takeClass(3);
// Output: Munna Sir will take 3 class(es).
```

---

### Explanation

| Concept        | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `extends`      | Used to inherit from another class.                                          |
| `super()`      | Calls the constructor of the parent class.                                   |
| Shared Methods | Inherited methods (like `getSleep()`) are available to all subclasses.       |
| Custom Methods | You can add new behavior to each subclass (like `takeClass()` in `Teacher`). |

---

### Why Use Inheritance?

- Avoid duplicate code.
- Express logical relationships (e.g., a Teacher **is a** Person).
- Make future extensions easier (e.g., add more subclasses like `Admin`, `Guardian`, etc.).
- Encourage consistency across components.

---

### Practice Task

Try creating a new class `Admin` that inherits from `Person` and adds the method `manageSystem()`.

<details>
<summary>Example Solution</summary>

```ts
class Admin extends Person {
  constructor(name: string, age: string, address: string) {
    super(name, age, address);
  }

  manageSystem() {
    console.log(`${this.name} is managing the system.`);
  }
}

const admin1 = new Admin("Sohan", "25", "Dhaka");
admin1.getSleep(7); // Inherited method
admin1.manageSystem(); // New method
```

</details>

---

## Type Guards in TypeScript – `typeof` & `in` Operators

Type guards are a powerful feature in TypeScript that help you **safely handle union types** by checking the **actual type** of a variable at runtime.

This allows you to write safer, more predictable logic and avoid runtime errors.

---

### Using `typeof` for Primitive Types

The `typeof` operator is used to check the type of **primitive values** like `string`, `number`, `boolean`, etc.

#### Example: Add two values (numbers or strings)

```ts
type TAlphaNumeric = string | number;

const add = (param1: TAlphaNumeric, param2: TAlphaNumeric): TAlphaNumeric => {
  // Check if both are numbers
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2; // Arithmetic addition
  } else {
    return param1.toString() + param2.toString(); // String concatenation
  }
};
```

#### Testing the Function

```ts
console.log(add(10, 20)); // ➜ 30
console.log(add("10", "20")); // ➜ "1020"
console.log(add(10, "20")); // ➜ "1020"
console.log(add("Code", 123)); // ➜ "Code123"
```

#### What’s Happening?

| Input          | Type Check                | Output      |
| -------------- | ------------------------- | ----------- |
| `10 + 20`      | number + number           | `30`        |
| `"10" + "20"`  | string + string           | `"1020"`    |
| `10 + "20"`    | number + string ➜ convert | `"1020"`    |
| `"Code" + 123` | string + number ➜ convert | `"Code123"` |

---

### Using `in` for Object Type Guards

The `in` operator is used to check if a **property exists** in an object, making it very useful for narrowing **union types of object shapes**.

#### Example: Distinguishing Between Normal and Admin Users

```ts
type TNormalUser = {
  name: string;
};

type TAdminUser = {
  name: string;
  role: "admin";
};

const getUser = (user: TNormalUser | TAdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};
```

#### Testing the Function

```ts
const normalUser: TNormalUser = { name: "Hazrat" };
getUser(normalUser);
// ➜ Output: My name is Hazrat

const adminUser: TAdminUser = { name: "Sohan", role: "admin" };
getUser(adminUser);
// ➜ Output: My name is Sohan and my role is admin
```

---

### Summary Table

| Operator | Use Case                                | Checks For               |
| -------- | --------------------------------------- | ------------------------ |
| `typeof` | Primitive types like `number`, `string` | `typeof value === "..."` |
| `in`     | Object shapes / keys                    | `"key" in object`        |

---

### Practice Task

Try writing a function `printValueType()` that accepts `string | number | boolean` and prints its type and value using `typeof`.

<details>
<summary> Example Solution</summary>

```ts
const printValueType = (value: string | number | boolean) => {
  if (typeof value === "string") {
    console.log(`This is a string: "${value}"`);
  } else if (typeof value === "number") {
    console.log(`This is a number: ${value}`);
  } else if (typeof value === "boolean") {
    console.log(`This is a boolean: ${value}`);
  }
};

printValueType("Hello");
printValueType(42);
printValueType(true);
```

</details>

---

### Why Use Type Guards?

- Helps safely handle complex types.
- Avoids unnecessary type casting.
- Prevents runtime errors.
- Improves code clarity and readability.

---

This section helps build your foundational understanding of **runtime type checking** in TypeScript.

---

## Type Guards in TypeScript – `instanceof`

When working with **class-based object types**, TypeScript allows us to use the `instanceof` operator to narrow down types at runtime. This is especially useful in **object-oriented programming**, where instances might come from a class hierarchy.

---

### What is `instanceof`?

The `instanceof` operator checks whether an object is an **instance of a specific class** (or one of its subclasses).
It is used to apply logic based on the **actual class** of the object at runtime.

---

### Example: Detecting Class Instances

Let’s define a base class `Animal` and two subclasses: `Dog` and `Cat`.

```ts
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} is making a generic animal sound`);
  }
}

class Dog extends Animal {
  makeBark() {
    console.log(`${this.name} is barking: "Woof! Woof!"`);
  }
}

class Cat extends Animal {
  makeMeaw() {
    console.log(`${this.name} is meowing: "Meow~"`);
  }
}
```

---

### Creating Objects

```ts
const dog = new Dog("Dog Vai", "Dog");
const cat = new Cat("Cat Vai", "Cat");
const rabbit = new Animal("Jhankar Vai", "Phero");
```

---

### Using `instanceof` Directly

```ts
const getAnimal1 = (animal: Animal) => {
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

getAnimal1(dog); // Dog Vai is barking: "Woof! Woof!"
getAnimal1(cat); // Cat Vai is meowing: "Meow~"
getAnimal1(rabbit); // Rabbit Vai is making a generic animal sound
```

---

### Cleaner: Type Guard Functions (Predicates)

To improve readability and reusability, you can define **custom type guard functions**.

```ts
const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};

const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};
```

Now use them in logic:

```ts
const getAnimal2 = (animal: Animal) => {
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

getAnimal2(dog);
getAnimal2(cat);
getAnimal2(rabbit);
```

---

### Benefits of `instanceof`

| Advantage                    | Description                                  |
| ---------------------------- | -------------------------------------------- |
| Runtime type detection       | Safe checks for real class type at runtime   |
| OOP-friendly                 | Works naturally with class inheritance       |
| Cleaner code with predicates | Improves separation of logic and reusability |

---

### Summary

- Use `instanceof` when working with **class-based types**.
- It helps determine the **actual class** of an object from a union of base types.
- Combine `instanceof` with **custom type guards** (`animal is Dog`) for clean and type-safe code.

---

### Practice Task

Create a `Bird` class extending `Animal`, and modify your type guard logic to handle it.

<details>
<summary> Sample Bird Class</summary>

```ts
class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying high!`);
  }
}

const bird = new Bird("Bird Vai", "Bird");
```

Now add an `isBird` predicate and update `getAnimal2()`!

</details>

---

With `instanceof`, you're now better equipped to safely and elegantly handle class-based logic in TypeScript.

---

## Access Modifiers in TypeScript

Access modifiers are used in TypeScript to control the **visibility** of class members (properties and methods). This helps achieve **encapsulation**, a fundamental principle of Object-Oriented Programming (OOP).

---

### Available Access Modifiers

| Modifier    | Accessibility                                  |
| ----------- | ---------------------------------------------- |
| `public`    | Accessible from anywhere (default)             |
| `private`   | Accessible **only inside the class**           |
| `protected` | Accessible **inside the class and subclasses** |
| `readonly`  | Can be read publicly but **not reassigned**    |

---

### Example: Bank Account

```ts
class BangAccount {
  public readonly id: number; //  public and readonly
  public name: string; //  public
  private _balance: number; //  private - cannot access from outside
  protected nid: number; //  protected - subclasses can access

  constructor(id: number, name: string, _balance: number, nid: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
    this.nid = nid;

    console.log(` Account created for ${name} with ID: ${id}`);
  }

  public addDeposit(amount: number) {
    this._balance += amount;
    console.log(` ${amount} deposited. New balance: ${this._balance}`);
  }

  public getBalance() {
    console.log(` Balance for ${this.name}: ${this._balance}`);
    return this._balance;
  }
}
```

---

### Creating an Account

```ts
const person = new BangAccount(11, "Hazrat", 200, 123456789);

// Accessing public properties
console.log(person.name); //  OK
console.log(person.id); //  OK

// Accessing private/protected properties ( Errors)
// console.log(person._balance); //  Property '_balance' is private
// console.log(person.nid);      //  Property 'nid' is protected

// Updating balance through public method
person.addDeposit(500); //  500 deposited
person.getBalance(); //  Balance for Hazrat: 700
```

---

### Inheritance & `protected`

```ts
class StudentAccount extends BangAccount {
  showNID() {
    console.log(` Accessing protected NID: ${this.nid}`);
  }

  //  Can't access private _balance here
  // console.log(this._balance); // Error
}
```

```ts
const student = new StudentAccount(22, "Student Mia", 300, 9876543210);
student.showNID(); //  Access to protected member in subclass
```

---

### `readonly` in Action

```ts
const account = new BangAccount(101, "Readonly Test", 1000, 123123123);

// Reading is OK
console.log(account.id); //  OK

// Writing is not allowed
// account.id = 200; //  Error: Cannot assign to 'id' because it is a read-only property
```

---

### Summary

- Use `public` for properties/methods that should be open to the outside world.
- Use `private` to **hide internal details** and avoid unwanted access.
- Use `protected` when subclasses need internal access.
- Use `readonly` to make a value constant after initialization.

---

These modifiers help enforce **clean architecture** and ensure **data integrity** in your TypeScript applications.

---

## Getters and Setters in TypeScript

In TypeScript, **getters** and **setters** are special methods used to access and modify the properties of a class. They provide a clean way to **encapsulate** logic and control how the properties are retrieved and updated.

---

### What are Getters and Setters?

- **Getter**: A getter allows you to retrieve the value of a property. It's defined using the `get` keyword and provides a **read-only** way to access private or protected class properties.

- **Setter**: A setter allows you to modify the value of a property. It's defined using the `set` keyword and provides a **controlled** way to update private or protected class properties.

---

### Example: Bank Account with Getters and Setters

In this example, we'll define a **BangAccount** class, which uses a setter to deposit money into the account and a getter to retrieve the balance.

```ts
class BangAccount {
  public readonly id: number; // Public readonly property
  public name: string; // Public property
  private _balance: number; // Private property, only accessible inside the class

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;

    console.log(
      ` Account created for ${name} with ID: ${id} and balance: ${_balance}`
    );
  }

  // Getter to access the balance
  get balance() {
    console.log(` Current balance for ${this.name} is: ${this._balance}`);
    return this._balance; // Return the balance
  }

  // Setter to deposit money into the account
  set diposite(amount: number) {
    if (amount > 0) {
      this._balance += amount; // Update balance with deposit
      console.log(
        ` ${amount} deposited successfully. New balance: ${this._balance}`
      );
    } else {
      console.log(` Cannot deposit a negative or zero amount.`);
    }
  }
}
```

### Key Points:

- **Public Readonly Property (`id`)**: This ensures that the ID can only be set once, when the object is created, and cannot be modified after that.
- **Private Property (`_balance`)**: This keeps the balance value **encapsulated**, preventing direct access from outside the class.
- **Getter (`balance`)**: The getter allows access to the private balance property. This provides a clean and controlled way of reading the balance.
- **Setter (`diposite`)**: The setter allows you to deposit money into the account. It ensures that only positive amounts are added, providing validation.

---

### Usage

You can create an instance of `BangAccount`, deposit money using the setter, and check the balance using the getter.

#### Step 1: Create an Account

```ts
const person = new BangAccount(11, "Hazrat", 200);
```

This will create an account with an initial balance of **200**.

#### Step 2: Check the Balance (Using Getter)

```ts
person.balance; //  Current balance for Hazrat is: 200
```

This accesses the balance through the getter method.

#### Step 3: Deposit Money (Using Setter)

```ts
person.diposite = 500; //  500 deposited successfully. New balance: 700
```

This will deposit **500** into the account, updating the balance.

#### Step 4: Check Updated Balance (Using Getter)

```ts
person.balance; //  Current balance for Hazrat is: 700
```

The balance is updated to **700** after the deposit.

#### Step 5: Attempt Invalid Deposit (Using Setter)

```ts
person.diposite = -100; //  Cannot deposit a negative or zero amount.
```

If you try to deposit a negative or zero amount, the setter will prevent it and display an error message.

---

### Benefits of Using Getters and Setters:

1. **Encapsulation**: You can control how the internal properties of the class are accessed and modified, keeping them hidden from direct manipulation.
2. **Validation**: With setters, you can ensure that only valid data is being set (e.g., validating deposit amounts).
3. **Read-only Access**: Using getters, you can give users read-only access to internal data, like a balance, without allowing them to modify it.
4. **Custom Logic**: You can add logic to getters and setters, such as triggering events when a value changes, or performing calculations when retrieving a value.

---

### Summary

- **Getters** provide a way to access private/protected properties with custom logic and without allowing direct manipulation of those properties.
- **Setters** enable controlled modification of private/protected properties, allowing you to enforce rules (like validation) before updating a value.
- They are an essential feature of **encapsulation** in object-oriented programming, helping you maintain **data integrity** and provide cleaner, more maintainable code.

---

## Static Members in Object-Oriented Programming (OOP)

In TypeScript, **static properties** and **static methods** are associated with the **class itself** rather than with individual instances of the class. Static members can be used to store data or behavior that should be shared across all instances of the class. This is useful when you need to track shared state, or when certain functionality does not require instance-specific data.

### Key Concepts:

- **Static Properties**: Shared across all instances of the class. They are accessed using the class name, not via an instance.
- **Static Methods**: Methods that belong to the class itself, and not to any individual instance. They are invoked directly on the class.

### 1. Example 1: Non-static Class (`Counter1`)

In this example, we will create a counter class where each instance maintains its own state.

```ts
class Counter1 {
  count: number = 0; // Instance property to store the count for each object

  increment() {
    this.count = this.count + 1; // Increment instance's count
    return this.count;
  }

  decrement() {
    this.count = this.count - 1; // Decrement instance's count
    return this.count;
  }
}

const instance11 = new Counter1();
console.log(`Instance11 Incremented: ${instance11.increment()}`); // 1

const instance12 = new Counter1();
console.log(`Instance12 Incremented: ${instance12.increment()}`); // 1
```

**Explanation:**

- `Counter1` has an **instance property** called `count`. Each instance of `Counter1` maintains its own version of `count`.
- Every time you create a new instance, its `count` starts at `0`, and you can increment or decrement it without affecting other instances.

### 2. Example 2: Static Class (`Counter2`)

In this example, we will modify the `Counter` class to make the `count` property static, which means the count will be shared across all instances of the class.

```ts
class Counter2 {
  static count: number = 0; // Static property to store a shared count across all instances

  increment() {
    Counter2.count = Counter2.count + 1; // Increment the static count
    return Counter2.count;
  }

  decrement() {
    Counter2.count = Counter2.count - 1; // Decrement the static count
    return Counter2.count;
  }
}

const instance21 = new Counter2();
console.log(`Instance21 Incremented: ${instance21.increment()}`); // 1 (static count shared)

const instance22 = new Counter2();
console.log(`Instance22 Incremented: ${instance22.increment()}`); // 2 (static count is shared across instances)
```

**Explanation:**

- `Counter2` has a **static property** `count` which is shared among all instances of the class.
- When you increment the `count` using one instance, it affects the value for all other instances since the static property is shared globally.
- **Key Point**: The `count` property is modified using `Counter2.count`, not `this.count`, because it’s a static property.

### 3. Example 3: Static Methods (`Counter3`)

Static methods are used when the functionality does not rely on instance-specific data. Static methods can be invoked directly on the class, without needing an instance.

```ts
class Counter3 {
  static count: number = 0; // Static property to store the count

  static increment() {
    Counter3.count = Counter3.count + 1; // Increment the static count
    return Counter3.count;
  }

  static decrement() {
    Counter3.count = Counter3.count - 1; // Decrement the static count
    return Counter3.count;
  }
}

// Calling static methods directly on the class
console.log(`Static Increment 1: ${Counter3.increment()}`); // 1
console.log(`Static Increment 2: ${Counter3.increment()}`); // 2
```

**Explanation:**

- `Counter3` has **static methods** `increment` and `decrement`. These methods operate on the static `count` property.
- **Static methods** are called using the class name (`Counter3.increment()`), not via an instance.
- Static methods are useful when the behavior is the same for all instances and doesn’t rely on instance-specific data.

### 4. Recap:

- **Instance properties/methods**: Belong to each individual instance of the class. Each instance can have its own values for properties and can call instance methods.
- **Static properties/methods**: Belong to the class itself. They are shared across all instances, and are accessed via the class name rather than an instance.

#### Why Use Static Members?

- Static properties are useful for **shared data** or **state** that is not tied to a particular instance.
- Static methods can implement **utility functions** or **helper functions** that don’t require an instance to be useful (e.g., logging, configuration, or calculation methods).

---

### Conclusion

Static members are a powerful feature in object-oriented programming in TypeScript. They allow you to share data or behavior across all instances of a class without needing to instantiate the class multiple times. Whether you're dealing with a shared counter, utility methods, or configurations, static members provide a clean and efficient way to handle common functionality.

---

## Polymorphism in TypeScript

Polymorphism is a powerful concept in Object-Oriented Programming (OOP) that allows objects of different types to be treated as instances of the same base type. In TypeScript, this is commonly achieved through class inheritance and method overriding.

### Why Use Polymorphism?

- Promotes **code reusability** and **flexibility**.
- Allows **dynamic behavior** at runtime.
- Makes code **easier to maintain** and **extend**.

---

### Example 1: People with Different Sleep Patterns

In this example, we define a base class `Person` with a method `getSleep()`. We then extend it in `Student` and `Developer` classes, each overriding the method with their own logic.

```ts
class Person {
  getSleep() {
    console.log(`I am a person. I sleep for 8 hours.`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student. I sleep for 7 hours.`);
  }
}

class Developer extends Person {
  getSleep() {
    console.log(`I am a developer. I sleep for 6 hours.`);
  }
}

// Function that demonstrates polymorphism
const getSleepingHours = (person: Person) => {
  person.getSleep(); // Calls appropriate method depending on the object type
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1); // I am a person. I sleep for 8 hours.
getSleepingHours(person2); // I am a student. I sleep for 7 hours.
getSleepingHours(person3); // I am a developer. I sleep for 6 hours.
```

---

### Example 2: Shape Area Calculation

Here we define a base class `Shape` with a method `getArea()`. This method is overridden in `Circle` and `Rectangle` subclasses to return the area based on their respective shapes.

```ts
class Shape {
  getArea(): number {
    return 0; // Default area
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    console.log(`Circle area: ${area}`);
    return area;
  }
}

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
    console.log(`Rectangle area: ${area}`);
    return area;
  }
}

const shape1 = new Shape(); // Will return 0
const shape2 = new Circle(10); // Will return area of circle
const shape3 = new Rectangle(10, 20); // Will return area of rectangle

const getShapeArea = (shape: Shape) => {
  shape.getArea(); // Dynamically resolves based on the instance
};

getShapeArea(shape1); // Circle area: 0
getShapeArea(shape2); // Circle area: 314.159...
getShapeArea(shape3); // Rectangle area: 200
```

---

### Summary

| Feature                  | Description                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| **Method Overriding**    | Allows subclasses to redefine methods of the parent class.                               |
| **Polymorphic Function** | Functions like `getSleepingHours()` or `getShapeArea()` demonstrate runtime flexibility. |
| **Code Scalability**     | Easily extendable for new subclasses without modifying existing logic.                   |

Polymorphism is essential for writing flexible and scalable applications. Once you grasp how to apply it in different contexts (like people, shapes, behaviors), you’ll find your code becoming more modular and clean.

---

## Abstraction in Object-Oriented TypeScript

Abstraction is one of the core pillars of Object-Oriented Programming (OOP). It allows us to **hide the complex implementation details** and expose only the **necessary parts of an object**. TypeScript supports abstraction through two main constructs:

- **Interfaces**
- **Abstract Classes**

Both of these allow developers to define a contract or blueprint for classes, ensuring consistency while promoting flexibility and maintainability.

---

### Example 1: Abstraction Using Interface

In this example, we define an interface `Vehicle1` that specifies the structure of any class that implements it.

```ts
interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car1 implements Vehicle1 {
  startEngine(): void {
    console.log(`[Interface] Starting the engine...`);
  }

  stopEngine(): void {
    console.log(`[Interface] Stopping the engine...`);
  }

  move(): void {
    console.log(`[Interface] Car is moving...`);
  }

  // Additional method beyond interface
  test() {
    console.log(`[Interface] Running a test on the car...`);
  }
}

const toyotaCar = new Car1();
toyotaCar.startEngine(); //  Starting the engine
toyotaCar.move(); //  Car is moving
toyotaCar.stopEngine(); //  Stopping the engine
toyotaCar.test(); //  Running a test
```

> **Interfaces define the “what” but not the “how.”** Classes that implement the interface must provide actual implementations for the methods.

---

### Example 2: Abstraction Using Abstract Class

An abstract class lets you define both **abstract methods** (which must be implemented in subclasses) and **concrete methods** (which are already implemented).

```ts
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;

  // Concrete method
  test() {
    console.log(`[Abstract]  Performing diagnostic test...`);
  }
}

class ToyotaCar extends Car2 {
  startEngine(): void {
    console.log(`[Abstract]  Starting the Toyota engine...`);
  }

  stopEngine(): void {
    console.log(`[Abstract]  Stopping the Toyota engine...`);
  }

  move(): void {
    console.log(`[Abstract]  Toyota car is moving...`);
  }
}

const corolla = new ToyotaCar();
corolla.startEngine(); //  Starting the Toyota engine
corolla.move(); //  Toyota car is moving
corolla.stopEngine(); //  Stopping the Toyota engine
corolla.test(); //  Performing diagnostic test
```

> **Abstract classes can offer shared functionality** while forcing subclasses to implement specific behaviors.

---

### Key Differences: Interface vs Abstract Class

| Feature                   | Interface                  | Abstract Class                 |
| ------------------------- | -------------------------- | ------------------------------ |
| Can have implementations? | ❌ No                      | ✅ Yes                         |
| Multiple inheritance      | ✅ Yes                     | ❌ No                          |
| Flexibility               | More flexible              | More structured                |
| Usage purpose             | Define capability/contract | Provide partial implementation |

---

### Use Abstraction When:

- You want to enforce a **consistent structure** across different classes.
- You want to **separate concerns** — consumers should not care about implementation.
- You want to **minimize code duplication** via base class logic.

---

Abstraction allows developers to build more scalable and maintainable applications by hiding implementation complexity and focusing only on what really matters — **behavior and structure**.

---

## Encapsulation in TypeScript (OOP)

Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It is the process of bundling data (properties) and methods (functions) that operate on the data into a single unit (class), and **restricting direct access** to some of the object's components. This helps in protecting the internal state of an object from unintended or harmful changes.

---

### Example: `BangAccount` class

```ts
class BangAccount {
  public readonly id: number; // Read-only: set once during construction
  public name: string; // Public: can be accessed and modified freely

  private _balance: number; // Private: can only be accessed from within this class

  protected nid: number; // Protected: accessible from this class and subclasses

  constructor(id: number, name: string, _balance: number, nid: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
    this.nid = nid;

    console.log(
      ` Account created for ${name} with ID: ${id} and initial balance: ${_balance}`
    );
  }

  //  Public method: safely modifies private _balance
  public addDeposit(amount: number) {
    this._balance += amount;
    console.log(` ${amount} deposited. New balance: ${this._balance}`);
  }

  // Private method: cannot be accessed outside the class
  private getBalance() {
    console.log(` Balance for ${this.name} is: ${this._balance}`);
    return this._balance;
  }

  //  Public method returns the private method reference
  public getHiddenMethod() {
    console.log("Accessing hidden method...");
    return this.getBalance;
  }
}
```

---

### Subclass Example: StudentAccount

```ts
class StudentAccount extends BangAccount {
  testAccess() {
    //  Accessing protected property from subclass
    console.log(` Accessing NID from subclass: ${this.nid}`);
  }
}
```

---

### Usage Example

```ts
const person = new BangAccount(11, "Hazrat", 200, 4234234234234);

console.log(` Account Holder: ${person.name}`); //  Accessible
console.log(` Account ID: ${person.id}`); //  Accessible

person.addDeposit(500); //  Uses public method to deposit money

//  Directly accessing private method will result in an error
// person.getBalance();  //  Not allowed

//  Access private method via public method
const hiddenBalanceFn = person.getHiddenMethod();
hiddenBalanceFn.call(person); // Output:  Balance for Mazumder is: 700

// 🎓 Create student account
const student = new StudentAccount(22, "Student Mia", 300, 9876543210);
student.testAccess(); // Output:  Accessing NID from subclass: 9876543210
```

---

### Benefits of Encapsulation

| Benefit             | Explanation                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Security**        | Private/protected properties can't be modified from outside. |
| **Control**         | Changes to internal state go through controlled methods.     |
| **Abstraction**     | Hide unnecessary details from outside the class.             |
| **Maintainability** | Makes it easier to update and debug.                         |

---

### Recap

- `private` ⇒ only accessible within the same class
- `protected` ⇒ accessible within the class and its subclasses
- `public` ⇒ accessible from anywhere
- `readonly` ⇒ can be set once during construction, then becomes immutable

---

Encapsulation is a great way to **enforce consistency and integrity** in your classes. You can expose only the parts of your object that are safe to be interacted with, while hiding sensitive implementation details.

---

## Author

**Hazrat 🐳 Ali**  
Programmer || Software Engineering  
[Hazrat](https://hazratali.dev/)  
[Email me](mailto:hazratalibusiness9@gmail.com)  
[Portfolio](https://hazratali.dev/)  
Passionate about building clean, maintainable, and scalable applications.
