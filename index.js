const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "Where are you right now?",
            name: "location",
        },
        {
            type: "input",
            message: "Tell me a little about yourself?",
            name: "biography",
        },
        {
            type: "input",
            message: "What's your linkedin?",
            name: "linkedin",
        },
        {
            type: "input",
            message: "What's your github?",
            name: "github",
        },
    ])
    .then((response) => {
        const body = `README.md BODY GOES HERE WITH FORMATTING`;
        fs.writeFile("./results/README.md", body, (err) =>
            err ? console.error(err) : console.log("Success!")
        );
    });
