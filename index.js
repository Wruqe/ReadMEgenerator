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
      type: "time for experience",
      message: "for how long have you been developing?",
      name: "time1",
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

function createReadme({name,}) {
  // writes html
  const ReadmeInfo = `
  # ${name}

  ## Installation
  ${install}
  
  ## Practical usefulness
  - Duration: ${useful}
  
  ## Contribution Guidlines
  - ${Contribution}
  
  ## Development Experience
  - Duration: ${time1}
  
  ## Contact
  - LinkedIn: ${linkedin}
  - GitHub: ${userBio}
  `;

fs.writeFile("README.md", createReadme, (err) =>
err ? console.error(err) : console.log("Success!")
);

}
