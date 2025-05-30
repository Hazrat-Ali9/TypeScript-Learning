{
  // Encapsulation in OOP (Object-Oriented Programming)
  // Encapsulation allows bundling of data (properties) and methods (functions)
  // and restricts direct access to some of the object’s components to enforce security and consistency.

  //  Define a class representing a bank account
  class BangAccount {
    // Public properties can be accessed from anywhere
    public readonly id: number; // Read-only: cannot be changed once set
    public name: string;

    // Private property: accessible only within the class
    private _balance: number;

    // Protected property: accessible within the class and subclasses
    protected nid: number;

    constructor(id: number, name: string, _balance: number, nid: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this.nid = nid;

      console.log(
        ` Account created for ${name} with ID: ${id} and initial balance: ${_balance}`
      );
    }

    //  Public method to deposit money — allows safe modification of balance
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
      console.log(` ${amount} deposited. New balance: ${this._balance}`);
    }

    //  Private method to get balance — not accessible outside this class directly
    private getBalance() {
      console.log(` Current balance for ${this.name} is: ${this._balance}`);
      return this._balance;
    }

    //  Public method that exposes the private getBalance as a function reference
    public getHiddenMethod() {
      console.log(" Accessing hidden method...");
      return this.getBalance;
    }
  }

  // 🎓 A subclass of BangAccount
  class StudentAccount extends BangAccount {
    testAccess() {
      //  Can access protected member `nid` since it's a subclass
      console.log(` Accessing NID from subclass: ${this.nid}`);
    }
  }

  //  Creating a new account instance
  const person = new BangAccount(11, "Hazrat", 200, 4234234234234);

  //  Accessing public properties
  console.log(` Account Holder: ${person.name}`);
  console.log(` Account ID: ${person.id}`);

  //  Deposit money
  person.addDeposit(500);

  //  Cannot directly call getBalance because it's private
  // person.getBalance(); //  This would throw an error

  //  Indirectly access private method through a safe public method
  const getBalFunc = person.getHiddenMethod(); // returns the private method as a function
  getBalFunc.call(person); //  Calls the hidden getBalance method securely

  //  Create a student account and demonstrate protected access
  const student = new StudentAccount(22, "Student Mia", 300, 9876543210);
  student.testAccess();
}
