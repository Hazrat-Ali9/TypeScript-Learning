// Statics in Object-Oriented Programming (OOP)
// In TypeScript, static members (properties and methods) belong to the class itself rather than to instances of the class.
// This allows us to share common data or behavior among all instances of the class. Static properties and methods are
// accessed using the class name instead of instances.

// Example 1: Static vs Non-Static Counter

// Non-static class where each instance maintains its own state
class Counter1 {
  count: number = 0; // Instance property to store the count for each object

  // Method to increment the count for a specific instance
  increment() {
    this.count = this.count + 1; // Increment instance's count
    return this.count;
  }

  // Method to decrement the count for a specific instance
  decrement() {
    this.count = this.count - 1; // Decrement instance's count
    return this.count;
  }
}

// Creating instances of Counter1
const instance11 = new Counter1();
console.log(`Instance11 Incremented: ${instance11.increment()}`); // 1

const instance12 = new Counter1();
console.log(`Instance12 Incremented: ${instance12.increment()}`); // 1

// Each instance of Counter1 has its own count property, and the count starts from 0 for every new instance.

///////////////////////////////////////////////////////////////

/**
 * Example 2: Static Class Counter
 *
 * Static members (variables, methods) belong to the class itself, so there’s only one copy of the static property
 * shared across all instances of the class. Static members are not accessed through instances, but through the class itself.
 */
class Counter2 {
  static count: number = 0; // Static property to store a shared count across all instances

  // Method to increment the static count
  increment() {
    Counter2.count = Counter2.count + 1; // Increment the static count
    return Counter2.count;
  }

  // Method to decrement the static count
  decrement() {
    Counter2.count = Counter2.count - 1; // Decrement the static count
    return Counter2.count;
  }
}

// Creating instances of Counter2
const instance21 = new Counter2();
console.log(`Instance21 Incremented: ${instance21.increment()}`); // 1 (static count shared)

const instance22 = new Counter2();
console.log(`Instance22 Incremented: ${instance22.increment()}`); // 2 (static count is shared across instances)

// Notice that all instances of Counter2 share the same `count` value.

///////////////////////////////////////////////////////////////

/**
 * Example 3: Static Methods in a Class
 *
 * Static methods are methods that can be called without creating an instance of the class.
 * These methods can directly access and modify static properties.
 */

class Counter3 {
  static count: number = 0; // Static property to store the count

  // Static method to increment the static count
  static increment() {
    Counter3.count = Counter3.count + 1; // Increment the static count
    return Counter3.count;
  }

  // Static method to decrement the static count
  static decrement() {
    Counter3.count = Counter3.count - 1; // Decrement the static count
    return Counter3.count;
  }
}

// Calling static methods directly on the class (without creating an instance)
console.log(`Static Increment 1: ${Counter3.increment()}`); // 1
console.log(`Static Increment 2: ${Counter3.increment()}`); // 2

// Static methods can be invoked without creating an instance of the class, and the static `count` is shared across calls.

///////////////////////////////////////////////////////////////

/**
 * Recap:
 *
 * - **Instance properties/methods**: Belong to each individual instance of the class.
 *   They can have unique values for each instance.
 *
 * - **Static properties/methods**: Belong to the class itself and are shared across all instances of that class.
 *   Static members are accessed using the class name rather than an instance of the class.
 *
 * - **Static properties** can be modified or accessed using the class name, while **static methods** can also be invoked
 *   directly from the class.
 */

// Here, we demonstrate how static members work and how they differ from instance members.
