
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}`;
// }

// function to generate markdown for README
// const generateMarkdown = (data) => {

function generateMarkdown(response) {
  return `
   ${response.Title}
  # Table of Contents
  ## Description
  ![License](https://i,g.shields.io/badge/License-${response.License}+blue.svg "License Badge"

    ${response.Description}
  ## Installation
  ${response.Installation}
  ## Usage:
  ${response.Usage}
  ## Features:
  ${response.Features}
  ## Contributing:
  ${response.Contributing}
  ## Tests:
  ${response.Tests}
  ## Email address:
  ${response.Email}
  ## GitHub username:
  ${response.GitHub}
  ## License
    For more information on the license, click on the link below
    - [License](http://opensource.org/licenses/${response.License})

  ##Questions or comments?
    If you have any questions or would like to leave a comment, please see my GitHub page at:
    - [GitHub profile](https://github.com/${response.GitHub})
  
    Or send me an email at:
    ${response.Email}
    `;
}




  //License badge handling
  // note to self - try using switch as in 09 math activity
//   switch (data.license) {
//     case 'Apache 2.0':
//       licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
//       break;
//     case 'BSD 2-Clause':
//       licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
//       break;
//     case 'BSD 3-Clause':
//       licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
//       break;
//     case 'GNU AGPLv3.0':
//       licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
//       break;
//     case 'GNU GPLv2.0':
//       licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
//       break;
//     case 'GNU GPLv3.0':
//       licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
//       break;
//     case 'MIT':
//       licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//       break;
//     case 'Mozilla Public 2.0':
//       licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
//       break;
//     default:
//       break;
//   }
// };


module.exports = generateMarkdown;