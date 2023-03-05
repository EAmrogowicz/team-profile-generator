// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

import inquirer from "inquirer";

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

class teamProfile {
  // Request for information
  // EMPLOYEE - MANAGER
  // Office number MISSING
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
      ])
      .then((answer) => {
        console.log(answer);
      });
  };

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
      ])
      .then((answer) => {
        console.log(answer);
      });
  };

  // EMPLOYEE - INTERN
  askForEngineer = () => {
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
      ])
      .then((answer) => {
        console.log(answer);
      });
  };
  // as for new employee
  // askForNewEmployee = () => {
  //   inquirer
  //     .prompt([
  //       {
  //         type: "confirm",
  //         message: "Do you want to add a new Employee?",
  //         name: "choice",
  //       },
  //     ])
  //     .then((answer) => {
  //       // If the user says yes to another employee, run app again, otherwise quit the app and print result
  //       if (answer.choice) {
  //         const newEmployee = new Employee();
  //       } else {
  //         return;
  //       }
  //     });
  // };
  // quit() {
  //   console.log("\nGoodbye!");
  //   process.exit(0);
  // }
}
//   writeFileAsync("./output/team.html", generateMarkdown(answers))
// )
// .then(() => console.log("Success!"))
// .catch((err) => console.error(err));
