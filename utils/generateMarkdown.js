function generateMarkdown(data) {
  return `# ${data.title}

# Github: ${data.github} 
# Email:  ${data.email}
# title: ${data.title} 
# description:  ${data.description}
# license: ${data.license}
# Installation: ${data.installation}
# test:  ${data.test}
# usage:  ${data.usage}
# contributing: ${data.contributing}

`;
}

module.exports = generateMarkdown;
