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

  getName(name) {
    return this.name;
  }

  getId(id) {
    return this.id;
  }

  getEmail(email) {
    return this.email;
  }

  // returns 'Employee'
  getRole() {
    return this.role;
  }
}
