// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const pageTemplate = require("./src/page-template.js");

class teamProfile {
  // Request for information
  // EMPLOYEE - MANAGER
  askForManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager name:",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is the manager id number:",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is the manager email:",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "What is the manager office number:",
          name: "managerNumber",
        },
      ])
      .then((answer) => {
        this.askForNextEmployee();
      });
  };

  // choose who to add next
  askForNextEmployee = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Do you want to:",
          choices: [
            "add an engineer",
            "add a intern",
            "finish building the team",
          ],
          name: "choice",
        },
      ])
      .then((answer) => {
        // If the user says yes to another employee, run app again, otherwise quit the app and print result
        if (answer.choice === "add an engineer") {
          this.askForEngineer();
        } else if (answer.choice === "add a intern") {
          this.askForIntern();
        } else {
          this.quit();
        }
      });
  };

  quit() {
    writeFileAsync("./output/team.html", pageTemplate(answer))
      .then(() => console.log("Success!"))
      .catch((err) => console.error(err));
  }

  // EMPLOYEE - ENGINEER
  askForEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer name:",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is the engineer id number:",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is the engineer email:",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is the engineer GitHub username:",
          name: "engineerUsername",
        },
      ])
      .then((answer) => {
        this.askForNextEmployee();
      });
  };

  // EMPLOYEE - INTERN
  askForIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern name:",
          name: "internName",
        },
        {
          type: "input",
          message: "What is the intern id number:",
          name: "internId",
        },
        {
          type: "input",
          message: "What is the intern email:",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What is the intern school:",
          name: "internSchool",
        },
      ])
      .then((answer) => {
        this.askForNextEmployee();
      });
  };
}

const newTeam = new teamProfile();
newTeam.askForManager();
