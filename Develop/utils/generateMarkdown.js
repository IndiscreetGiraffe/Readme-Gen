// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'no license') {
      return `
<<<<<<< HEAD
    ![badge](https://img.shields.io/badge/license-${data.license}-blue)
=======
    ![badge](https://img.shields.io/badge/license-${license}-blue)
>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
<<<<<<< HEAD
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${data.license})
    `;
  } else {
    return ' ';
  }
=======
>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
<<<<<<< HEAD
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
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
=======
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

>>>>>>> 2a13552d560ab187ec1222309bd717ce40f69f9e
`;
}

module.exports = generateMarkdown;
