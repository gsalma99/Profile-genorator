const inquirer = require("inquirer");

function main() {
  createManager();
}

function createManager() {
  console.log("Let's start building your team");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager name?",
      },
      {
        type: "input",
        name: "managerID",
        messages: "what is the manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        messages: "what is the manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        messages: "what is the manager's office number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}
