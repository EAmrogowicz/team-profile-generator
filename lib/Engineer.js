// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(answers) {
    answers.role = "Engineer";
    super(answers);
    this.username = answers.username;
  }

  getGithub() {
    return this.username;
  }
}

module.exports = Engineer;
