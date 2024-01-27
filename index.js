const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Please provide a breif description.",
            name: "description",
        },
        {
            type: "input",
            message: "How is your project supposed to be used?",
            name: "usage",
        },
        {
            type: "input",
            message:
                "Please provide three (3) features, one at a time. This is feature one (1)",
            name: "feature1",
        },
        {
            type: "input",
            message:
                "Please provide three (3) features, one at a time. This is feature two (2)",
            name: "feature2",
        },
        {
            type: "input",
            message:
                "Please provide three (3) features, one at a time. This is feature three (3)",
            name: "feature3",
        },
        {
            type: "input",
            message: "please provide the URL to the deployed site.",
            name: "deploy",
        },
        {
            type: "input",
            message: "Please provide the URL to the repo for your project.",
            name: "repo",
        },
        {
            type: "input",
            message:
                "Please provide details on anyone that worked on this project in the form of a paragraph.",
            name: "credits",
        },
    ])
    .then((response) => {
        const body = `

        # ${response.title}

        ## Description

        ${response.description}

        ## Usage

        ${response.usage}

        ## Features

        - ${response.feature1}
        - ${response.feature2}
        - ${response.feature3}

        ## Deployment and Repo

        ${response.deploy}

        ${response.repo}

        ## Credits

        ${response.credits}

        `;
    });

fs.writeFile("./results/README.md", body, (err) =>
    err ? console.error(err) : console.log("Success!")
);
