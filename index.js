const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const templates = require("./src/templates");
const Intern = require("./lib/Intern");
const DIST = path.resolve(__dirname, "dist");
const PATH = path.join(DIST, "team.html");

const team = [];

function main() {
  createManager().then((answers) => {
    const { managerName, managerID, managerEmail, managerOfficeNumber } =
      answers;
    const manager = new Manager(
      managerName,
      managerID,
      managerEmail,
      managerOfficeNumber
    );
    team.push(manager)

    createTeam();
  });
}

function createManager() {
  console.log("Let's start building your team");
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "what is the id of the Manager?",
    },
    {
      type: "input",
      name: "managerEmail",
      messages: "What is the address of the manager?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      messages: "what is the office number of the manager?",
    },
  ]);
}

function createEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerrName",
      message: "What is the name of the Engineer?",
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is the Id of the Engineer?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the address of the Engineer?",
    },
    {
      type: "input",
      name: "Github",
      message: "What is the Engineer's github username??",
    },
  ]);
}

function createIntern() {
  console.log("hello")
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the name of the Intern?",
    },
    {
      type: "input",
      name: "internID",
      message: "What is the ID of the Intern?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the address of the Intern??",
    },
    {
      type: "input",
      name: "School",
      message: "What school is the intern at?",
    },
  ]);
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberChoice",
        message: "Which type of team member would you like to add?",
        choices: ["Intern", "Engineer", "I have completed my team!"],
      },
    ])
    .then((answer) => {
      switch (answer.teamMemberChoice) {
        case "Engineer":
          createEngineer().then((answers) => {
            const { engineerName, engineerID, engineerEmail, github } = answers;
            const engineer = new Engineer(
              engineerName,
              engineerID,
              engineerEmail,
              github
            );
            team.push(engineer);

            createTeam();
          });
          break;

        case "Intern":
          createIntern().then((answers) => {
            const { internName, internID, internEmail, school } = answers;
            const intern = new Intern(
              internName,
              internID,
              internEmail,
              school
            );
            team.push(intern);

            createTeam();
          });
          break;

        default:
          buildTeam();
      }
    });
}

function createHTML(teamArr) {
  let htmlMain = "";

  teamArr.forEach((teamMember) => {
    if (teamMember.getRole() === "Manager") {
      htmlMain = htmlMain + templates.managerTemplate(teamMember);
    }
    if (teamMember.getRole() === "Engineer") {
      htmlMain = htmlMain + templates.engineerTemplate(teamMember);
    }
    if (teamMember.getRole() === "Intern") {
      htmlMain = htmlMain + templates.internTemplate(teamMember);
    }
  });
  return htmlMain;
}

function buildTeam() {
  fs.writeFileSync(PATH, createHTML(team), "utf-8");
}

main();
