// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${data.license}-blue)
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${data.license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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
const generateMarkdown = (data) => {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ##Languages USed
  ${data.projectLanguages}

  ## [Installation Instructions](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## [Tests](#table-of-contents)

  ${data.test}

  ##License
  This application is covered under the ${data.license} license

  ## [Questions](#table-of-contents)
  -------------------------------------------------------------------------------------------

  Need to contact me? Use the following!:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})



`;

}

module.exports = { generateMarkdown };
