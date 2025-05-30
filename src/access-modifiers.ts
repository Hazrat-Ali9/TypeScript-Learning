{
  // Access Modifiers in TypeScript
  /**
   * This example demonstrates how access modifiers work in TypeScript.
   * We'll use `public`, `private`, `protected`, and `readonly` in class properties.
   */
  

  // Class representing a basic Bangladeshi Bank Account
  class BangAccount {
    // `public` means this can be accessed anywhere (inside/outside the class)
    public readonly id: number; // `readonly` means the value can't be changed after initialization
    public name: string;

    // `private` means this property can only be accessed inside the class
    private _balance: number;

    // `protected` allows access within the class and subclasses
    protected nid: number;

    constructor(id: number, name: string, _balance: number, nid: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this.nid = nid;

      console.log(
        `✅ Account created for ${name} with ID: ${id} and initial balance: ${_balance}`
      );
    }

    // Public method to add deposit (modifies private _balance)
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
      console.log(`💰 ${amount} deposited. New balance: ${this._balance}`);
    }

    // Public method to get the current balance (accesses private _balance)
    public getBalance() {
      console.log(`💼 Current balance for ${this.name} is: ${this._balance}`);
      return this._balance;
    }
  }

  // Subclass demonstrating `protected` access
  class StudentAccount extends BangAccount {
    testAccess() {
      // ✅ Can access protected property
      console.log(`🆔 Accessing NID from subclass: ${this.nid}`);

      // ❌ this._balance is private in parent, so not accessible here
      // console.log(this._balance); // This would throw an error
    }
  }

  // Creating an instance of BangAccount
  const person = new BangAccount(11, "Hazrat", 200, 454121234234234);

  // Accessing public properties
  console.log(`👤 Account Holder: ${person.name}`);
  console.log(`🆔 Account ID: ${person.id}`);

  // Trying to update readonly property (will throw error if uncommented)
  // person.id = 100; // ❌ Error: Cannot assign to 'id' because it is a read-only property

  // Making a deposit and checking balance
  person.addDeposit(500); // 💰 +500
  person.getBalance(); // 💼 check

  // Trying to access private/protected members directly (should NOT be allowed)
  // console.log(person._balance); // ❌ Error: Property '_balance' is private
  // console.log(person.nid);      // ❌ Error: Property 'nid' is protected

  // Creating a student account and testing protected access
  const student = new StudentAccount(22, "Student Mia", 300, 9876543210);
  student.testAccess(); // ✅ Can access protected nid inside subclass
}
