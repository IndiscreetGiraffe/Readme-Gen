// TODO: Include packages needed for this application
<<<<<<< HEAD
const fs = require('fs');
const inquirer = require('inquirer');

const { generateMarkdown } = require('./utils/generateMarkdown.js')
=======
<<<<<<< HEAD
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('../../utils/generateMarkdown.js/generateMarkdown');

=======
const inquirer = require('inquirer');
const generateMarkdown = require('../Develop/utils/generateMarkdown.js');
const fs = require('fs');
>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
<<<<<<< HEAD
        message: 'What is your project name? (Required)',
        validate: titleInput => {
            if (nameInput) {
=======
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
                return true;
            } else {
                console.log('Uh oh! Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What kind of project is it and what problem(s) will it help solve? (Required)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter what your project is!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you decide to create this project? (Required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why created this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'How would someone use this project? (Required)',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter how its used!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions (step-by-step) for this project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instruction steps!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your examples!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how one is to test the application. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for this project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];

// TODO: Create a function to write README file
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
function writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeToFile()
    })
}(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeToFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeToFileResponse.message);
})
.catch(err => {
    console.log(error);
})
<<<<<<< HEAD
=======
=======
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
<<<<<<< HEAD
=======
>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
