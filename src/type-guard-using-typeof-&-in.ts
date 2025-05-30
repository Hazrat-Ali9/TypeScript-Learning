{
  // ----------------------------------------------------------
  // Type Guards in TypeScript: using `typeof` and `in` keyword
  // ----------------------------------------------------------
  // Define a union type that can be either a number or a string
  type TAlphaNumeric = string | number;

  /**
   * This function adds two values.
   * If both values are numbers, it performs arithmetic addition.
   * Otherwise, it converts both to strings and performs concatenation.
   */
  const add = (param1: TAlphaNumeric, param2: TAlphaNumeric): TAlphaNumeric => {
    console.log("param1:", param1, "param2:", param2);

    // Type guard using typeof to ensure safe operation
    if (typeof param1 === "number" && typeof param2 === "number") {
      console.log("Both parameters are numbers. Performing numeric addition.");
      return param1 + param2;
    } else {
      console.log(
        "At least one parameter is a string. Performing string concatenation."
      );
      return param1.toString() + param2.toString();
    }
  };

  // Testing the `add` function
  console.log("Result (10 + 20):", add(10, 20)); // 30
  console.log("Result ('10' + '20'):", add("10", "20")); // "1020"
  console.log("Result (10 + '20'):", add(10, "20")); // "1020"
  console.log("Result ('Hello' + 123):", add("Hello", 123)); // "Hello123"

  // ------------------------------
  // Type guard using `in` operator
  // ------------------------------

  // Normal user type with just a name
  type TNormalUser = {
    name: string;
  };

  // Admin user type extends normal user with a role
  type TAdminUser = {
    name: string;
    role: "admin";
  };

  /**
   * This function accepts either a normal user or an admin user.
   * It uses the `in` operator to determine if the `role` property exists,
   * which tells us if the user is an admin.
   */
  const getUser = (user: TNormalUser | TAdminUser) => {
    console.log("User received:", user);

    // Type guard using `in` to check if `role` exists in user
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  // Test with normal user
  const normalUser: TNormalUser = { name: "Hazrat" };
  getUser(normalUser); // Output: My name is Hazrat

  // Test with admin user
  const adminUser: TAdminUser = { name: "Hazrat", role: "admin" };
  getUser(adminUser); // Output: My name is Hazrat and my role is admin
}
