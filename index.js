// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'fullname',
    },
    {
        type: 'input',
        message: 'Please enter a title for your application.',
        name: 'apptitle',
    },
    {
        type: 'input',
        message: 'Enter a description of your application.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Under which license does your application operate?',
        name: 'license',
        choices: ['Apache License 2.0','GNU General Public License','MIT License','Mozilla Public License 2.0','Eclipse Public License version 2.0'],
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
`#${apptitle}

##Table of Contents:
1. Description
2. Installation
3. Usage
4. License
5. Contributing Guidelines
6. Tests
7. Questions

###1. Description
${description}

###2. Installation
This application is web-deployed; users need not install anything.

###3. Usage
You may use this software only if you are not a complete jibroni. If you don't understand what I mean by that, then you are included and may not use it.

Ohio State fans are similarly barred from usage, as are in fact most Ohio residents.

###4. License
This application is licensed by: ${license}

###5. Contributing Guidelines
Contributions are forbidden. If you try it, we will send people to your house to pulverize your lawn, let the air out of your kid's bike tires, and insult your spouse in grossly personal terms. You were warned.

###6. Tests
Extensive testing has been done to ensure that this application works as intended; whaddya' think we are, crooks?

###7. Questions
Any questions or comments may be directed to:
${fullname}
${email}
https://github.com/${github}`

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([questions])

    .then((answers) => {
        const mdPageContent = generateMarkdown(answers);

        fs.writeFile('readme.md', mdPageContent, (err) =>
            err ? console.log(err) : console.log('README file successfully generated. Thanks for playing.')
        );
    })
}

// Function call to initialize app
init();
