
let inquirer = require('inquirer');
let fs = require('fs');
const util = require('./Utils/generateMarkdown');
// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter the title of your project, please:",
            name: "Title"
        },
        {
            type: "input",
            message: "Enter a description for your project:",
            name: "Description"
        },
        {
            type: "input",
            message: "Enter the installation instructions for your project (important: enter these instructions as comma separated values):",
            name: "Installation"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "Usage"
        },
        {
            type: "input",
            message: "Enter any notable features of your project:",
            name: "Features"
        },
        {
            type: "input",
            message: "Enter contribution guidelines for your project:",
            name: "Contributing"
        },
        {
            type: "input",
            message: "Enter test information for your project:",
            name: "Tests"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "GitHub"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "Email"
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "License",
            choices: [
                "MIT License",
		        "GNU GPL v 3",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"
            ]
        },
    ]);
};

//adding feedback from the console re success or failure of creating new readme file
// const fs = require("fs") similar to in class activity 28
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// function writeToFile(fileName, data) {
// fs.writeFile("READMEgenerated.md", "README ", function(err) {
//     if (err) {console.log("Uh-oh, there has been an error.")}
//     else {console.log("Success! Your README file has been generated.")}
//     });
// }
    
// // function to write README file
//not sure if this works because it was written before the rest
function writeToFile(readmeGenerated, data) {
    fs.writeFile(readmeGenerated.md, generateMarkdown(data), err =>
        err ? console.log(err) : console.log("Success! Your README file has been generated."));
}

// function to initialize program
function init() {
    inquirer.prompt(promptUser)
        .then((data) => {
            writeToFile(readmeGenerated, data);
        });
}

// function call to initialize program
init();
//source of badges/shields
// https://shields.io/