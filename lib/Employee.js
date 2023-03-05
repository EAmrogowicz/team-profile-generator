class Employee {
  constructor(answers) {
    this.role = "Employee";
    if (answers.role != "Employee") {
      this.role = answers.role;
    }
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  // returns 'Employee'
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
