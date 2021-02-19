// setting up entries from user for their README file
// helpful website with inquirer code examples https://www.codota.com/code/javascript/modules/inquirer

// TODO: Include packages needed for this application



var inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
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
            message: "Enter the installation instructions for your project (important: enter these instructions as a comma separated list):",
            name: "Installation"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "Usage"
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
        }




//adding feedback from the console re success or failure of creating new readme file
const fs = require("fs") 
fs.writeFile ("testing.md", "whatever the heck", function(err) {
if (err) {console.log("there has been an error")}
else {console.log("success")}
})



// https://shields.io/