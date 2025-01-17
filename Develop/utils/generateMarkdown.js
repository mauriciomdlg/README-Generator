// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>{
  const licenceInfo = licenses[license] || null;
  return licenceInfo ? licenceInfo.badge + licenseInfo.url : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === noLicesnse ? '' : licenses[license].url;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  return license === noLicesnse ? '' : `## License

  This project is convered under the [${license}](${licenseLink}) license.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(title,description,installation,usage,license,contrubute,tests,github,email) {
  const licenseBadge = renderLicenseBadge(license);
  const lisenceSection = renderLicenseSection(license);
  
  return `# ${title}

  ${licenseBadge === '' ? '' : `${licenseBadge}

`}## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${license === noLicense ? '' : `- [License](#license)
`}- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

${licenseSection}## Contributing

${contribute}

## Tests

${tests}

## Questions

GitHub: [${github}](https://github.com/${github})

If you have additional questions, please contact me by email at [${email}](mailto:${email})
`;
}

export default generateMarkdown;
