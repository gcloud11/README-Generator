const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const generateReadMe = util.promisify(fs.writeFile);


//function for that creates prompts and questions
function questions() {
    return inquirer.prompt([

        {type: "input", 
        message: "What is the title for this Project?",
        name: "title"
        },
    
        {type: "input", 
        message: "Please enter a description of your project:",
        name: "description"
        },
    
        {type: "input", 
        message: "Please enter installation instructions:",
        name: "installation"
        },
    
        {type: "input", 
        message: "How will your application be used?",
        name: "usage"
        },
    
        {type: "input", 
        message: "What are the contributing guidelines?",
        name: "contributing"
        },
    
        {type: "input", 
        message: "What are the testing Instructions?",
        name: "tests"
        },
    
        {type: "checkbox", 
        message: "Please choose a license:",
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "ISC"
        ],
        name: "license"
        },
    
        {type: "input", 
        message: "Please enter you GitHub username:",
        name: "username"
        },
    
        {type: "input", 
        message: "Please enter you email address:",
        name: "email"
        },
    
    ]);
}


//response could be named anything. It's nust a placeholder

//This is the information that will be written or generated inside of the README.md
function writeInReadMe(response) {
    return `
# ${response.title}


![Generic badge](https://img.shields.io/badge/License-${response.license}-green.svg)


# Table of Contents

* [Description](#description)
* [Installation](#description)
* [Usage](#description)
* [Contributing](#description)
* [Tests](#description)
* [License](#description)
* [Questions](#description)

## Description:
        ${response.description}
    
## Installation:
        ${response.installation}

## Usage:
        ${response.usage}
    
## Contributing:
        ${response.contributing}
    
## Tests:
        ${response.tests}
    
## License:
    For more about linceses, click on the link provided below.

* [Lincense](https://opensource.org/lincenses/${response.license})
    
## Questions:
    You can also see my Gihub profile at the link provided below:
        
* [GitHub Profile](https://github.com/${response.username})

    If you have any additional questions you can reach me by email at: ${response.email}
`;
}


async function go() {
    try {
        const response = await questions();

        const readMe = writeInReadMe(response);

        await generateReadMe("README.md", readMe);
        console.log("You have succesfully generated a READme :) ! Go Check it Out!!");

    } catch (err) {
        console.log(err);
    }
}

go();


