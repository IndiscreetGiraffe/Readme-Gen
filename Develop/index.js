// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const promptProject = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Uh oh! Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write something here about your project. Like your motivation or a description. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter something about your project!');
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
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
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
            type: 'checkbox',
            name: 'projectLanguages',
            message: 'What languages did you use to creat this? Select all that apply.',
            choices: ['CSS','HTML','Node','Javascript','Express','Other']
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license will you use for this project?',
            choices: ['agpl', 'apache', 'MIT', 'Open','no license']
        }   
    ])
};

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {

    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Huzzah! Your file is born!');

    });
};

// TODO: Create a function to initialize app
function init() {
    promptProject()
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeFile('readMeDemo.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
