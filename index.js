const fs = require("fs");
const inquirer  = require("inquirer");

// information used for html
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "name",
    },
    {
      type: "input",
      message: "what are your installation steps?",
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
      type: "linkedinInfo",
      message: "whats your linkedin?",
      name: "linkedin",
    },
    {
      type: "bio",
      message: "What is your github?",
      name: "userBio",
    },
  ])
  .then((answer) => createReadme(answer));

function createReadme({name, install, useful, Contribution, describe, linkedin, userBio}) {
  // writes html
  const ReadmeInfo = `
  # ${name}

  ## Installation
  - ${install}
  
  ## Practical usefulness
   - ${useful}
  
  ## Contribution Guidlines
  - ${Contribution}
  
  ## Description of project
   - ${describe}
  
  ## Contact
  - LinkedIn: ${linkedin}
  - GitHub: ${userBio}
  `;

fs.writeFile("GeneratedReadME.md", ReadmeInfo, (err) =>
err ? console.error(err) : console.log("Success!")
);

}
