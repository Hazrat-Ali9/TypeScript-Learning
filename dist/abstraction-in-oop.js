"use strict";
{
    // Abstraction in OOP
    // Class Car1 implements the Vehicle1 interface.
    // This means it MUST provide implementations for all interface methods.
    class Car1 {
        startEngine() {
            console.log(`[Interface] Starting the engine...`);
        }
        stopEngine() {
            console.log(`[Interface] Stopping the engine...`);
        }
        move() {
            console.log(`[Interface] Car is moving...`);
        }
        // Additional method not part of interface
        test() {
            console.log(`[Interface] Running a test on the car...`);
        }
    }
    // Create an instance of Car1
    const toyotaCar = new Car1();
    toyotaCar.startEngine(); // Output: Starting the engine
    toyotaCar.move(); // Output: Car is moving
    toyotaCar.stopEngine(); // Output: Stopping the engine
    toyotaCar.test(); // Output: Running test
    console.log("\n--- Now demonstrating abstract class version ---\n");
    // ========================
    // Abstraction using Abstract Class
    // ========================
    // Abstract class acts as a partially implemented blueprint.
    // It can contain both abstract (unimplemented) and concrete (implemented) methods.
    class Car2 {
        // Concrete method: already implemented
        test() {
            console.log(`[Abstract] Performing diagnostic test...`);
        }
    }
    // Concrete subclass must implement all abstract methods
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`[Abstract] Starting the Toyota engine...`);
        }
        stopEngine() {
            console.log(`[Abstract] Stopping the Toyota engine...`);
        }
        move() {
            console.log(`[Abstract] Toyota car is moving...`);
        }
    }
    // Create an instance of the subclass
    const corolla = new ToyotaCar();
    corolla.startEngine(); // Output: Starting the Toyota engine
    corolla.move(); // Output: Toyota car is moving
    corolla.stopEngine(); // Output: Stopping the Toyota engine
    corolla.test(); // Output: Performing diagnostic test
}
