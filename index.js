const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");
// support internal API
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const pageTemplate = require("./src/page-template.js");

// returns a version with promises
const writeFileAsync = util.promisify(fs.writeFile);

class teamProfile {
  team = [];
  initiateTeam = async () => {
    await this.askForManager();
    await this.askForTeam();
  };

  getTeam() {
    return this.team;
  }

  askForTeam = async () => {
    while (true) {
      const nextEmployeeAnswer = await this.askForNextEmployee();

      if (nextEmployeeAnswer === "add an engineer") {
        await this.askForEngineer();
      } else if (nextEmployeeAnswer === "add a intern") {
        await this.askForIntern();
      } else {
        break;
      }
    }
  };
  // Request for information
  // EMPLOYEE - MANAGER
  askForManager = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the manager name:",
        name: "name",
      },
      {
        type: "number",
        message: "What is the manager id number:",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager email:",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager office number:",
        name: "officeNumber",
      },
    ]);

    //convert to employee object
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    this.team.push(manager);
  };

  // choose who to add next
  askForNextEmployee = async () => {
    const response = await inquirer.prompt([
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
    ]);

    return response.choice;
  };

  // EMPLOYEE - ENGINEER
  askForEngineer = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the engineer name:",
        name: "name",
      },
      {
        type: "number",
        message: "What is the engineer id number:",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer email:",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer GitHub username:",
        name: "username",
      },
    ]);
    // convert to employee object
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.username
    );
    this.team.push(engineer);
  };

  // EMPLOYEE - INTERN
  askForIntern = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the intern name:",
        name: "name",
      },
      {
        type: "number",
        message: "What is the intern id number:",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern email:",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern school:",
        name: "school",
      },
    ]);
    // convert to intern object
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    this.team.push(intern);
  };
}

async function renderTeam(team) {
  try {
    await writeFileAsync(outputPath, pageTemplate(team));
  } catch (e) {
    console.log(e);
  }
}

async function main() {
  const newTeam = new teamProfile();
  await newTeam.initiateTeam();
  const team = newTeam.getTeam();

  await renderTeam(team);
}

main();
