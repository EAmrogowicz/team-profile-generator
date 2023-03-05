class Employee {
  constructor(name, id, email, role) {
    this.role = "Employee";
    if (role != undefined) {
      this.role = role;
    }
    this.name = name;
    this.id = id;
    this.email = email;
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
