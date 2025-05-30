"use strict";
{
    /**
     * This function adds two values.
     * If both values are numbers, it performs arithmetic addition.
     * Otherwise, it converts both to strings and performs concatenation.
     */
    const add = (param1, param2) => {
        console.log("param1:", param1, "param2:", param2);
        // Type guard using typeof to ensure safe operation
        if (typeof param1 === "number" && typeof param2 === "number") {
            console.log("Both parameters are numbers. Performing numeric addition.");
            return param1 + param2;
        }
        else {
            console.log("At least one parameter is a string. Performing string concatenation.");
            return param1.toString() + param2.toString();
        }
    };
    // Testing the `add` function
    console.log("Result (10 + 20):", add(10, 20)); // 30
    console.log("Result ('10' + '20'):", add("10", "20")); // "1020"
    console.log("Result (10 + '20'):", add(10, "20")); // "1020"
    console.log("Result ('Hello' + 123):", add("Hello", 123)); // "Hello123"
    /**
     * This function accepts either a normal user or an admin user.
     * It uses the `in` operator to determine if the `role` property exists,
     * which tells us if the user is an admin.
     */
    const getUser = (user) => {
        console.log("User received:", user);
        // Type guard using `in` to check if `role` exists in user
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    // Test with normal user
    const normalUser = { name: "Rakib" };
    getUser(normalUser); // Output: My name is Rakib
    // Test with admin user
    const adminUser = { name: "Sakib", role: "admin" };
    getUser(adminUser); // Output: My name is Sakib and my role is admin
}
