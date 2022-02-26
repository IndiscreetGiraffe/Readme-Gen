// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'no license') {
      return `
<<<<<<< HEAD
    ![badge](https://img.shields.io/badge/license-${data.license}-blue)
    ![badge](https://img.shields.io/badge/license-${license}-blue)
=======
<<<<<<< HEAD
    ![badge](https://img.shields.io/badge/license-${data.license}-blue)
=======
    ![badge](https://img.shields.io/badge/license-${license}-blue)
>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${data.license})
    `;
  } else {
    return ' ';
  }
<<<<<<< HEAD
=======
=======
>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
<<<<<<< HEAD
const generateMarkdown = (data) => {

  return `# ${data.title}
=======
function generateMarkdown(data) {
  return `
  # ${data.title}
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
<<<<<<< HEAD
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
=======

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

<<<<<<< HEAD
  ##Languages USed
  ${data.projectLanguages}

  ## [Installation Instructions](#table-of-contents)
=======
  ## [Installation](#table-of-contents)
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## [Tests](#table-of-contents)

  ${data.test}

<<<<<<< HEAD
  ##License
  This application is covered under the ${data.license} license

  ## [Questions](#table-of-contents)
  -------------------------------------------------------------------------------------------

  Need to contact me? Use the following!:
=======
  ## [Questions](#table-of-contents)

  Please contact me using the following links:
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
<<<<<<< HEAD



`;

}

module.exports = { generateMarkdown };
=======
=======
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
`;
}

module.exports = generateMarkdown;
>>>>>>> c9d3f0681a8052456ba854c6e9d47b12eba08982
