const fs = require("fs");
const inquirer = require("inquirer");

// Function to generate badge 
function genLicenseBadge(license) {
  // Getting to generate badges dynamically or by url
    const badgeURL = `https://img.shields.io/badge/license-${license.replace(/\s+/g, '_')}-brightgreen`;
    return `[![License]( ${badgeURL} )](#${license.toLowerCase().replace(/\s+/g, '-')})`;
}

// Function to generate README content
function generateReadmeContent({ name, install, useful, Contribution, describe, linkedin, userBio, LicenseType }) {
    const licenseBadge = genLicenseBadge(LicenseType);

    const ReadmeInfo = `
# ${name}

## Installation
- ${install}

## Practical usefulness
- ${useful}

## Contribution Guidelines
- ${Contribution}

## Description of Project
- ${describe}

## Contact
- LinkedIn: ${linkedin}
- GitHub: ${userBio}

## License
${licenseBadge}

<a name="${LicenseType.toLowerCase().replace(/\s+/g, '-')}"></a>

Licensed under the [${LicenseType}](#${LicenseType.toLowerCase().replace(/\s+/g, '-')}) license.
`;

    return ReadmeInfo;
}

// Inquirer prompts for collecting user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project name?",
            name: "name",
        },
        {
            type: "input",
            message: "What are your installation steps?",
            name: "install",
        },
        {
            type: "input",
            message: "What makes your app useful?",
            name: "useful",
        },
        {
            type: "input",
            message: "Guidelines for contributing?",
            name: "Contribution",
        },
        {
            type: "input",
            message: "Describe your project!",
            name: "describe",
        },
        {
            type: "input",
            message: "What's your LinkedIn?",
            name: "linkedin",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "userBio",
        },
        {
            type: "list",
            message: "What type of license are you using?",
            name: "LicenseType",
            choices: ['Apache 2.0', 'GNU 3.0', 'MIT', 'NONE']
        },
    ])
    .then((answers) => {
        const readmeContent = generateReadmeContent(answers);

        fs.writeFile("README.md", readmeContent, (err) =>
            err ? console.error(err) : console.log("Success!")
        );
    });
