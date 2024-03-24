const { execSync } = require('child_process');
const fs = require('fs');
const packageJson = require('../package.json');
const assertCommitted = require('./git/assertCommitted');
const getContributors = require('./git/getContributors');
const commit = require('./git/commit');

assertCommitted();

packageJson.contributors = packageJson.contributors ?? [];

const gitContributors = getContributors();

const newNames = [];

const isMatch = ({ name, email, url }) => 
  ({ name: name2, email: email2, url: url2 }) => {
    name === name2 && (email === email2 || url === url2);
}
gitContributors.forEach(contributor => {

  if (!packageJson.contributors.some(isMatch(contributor))) {
    console.log(`New contributor found: ${contributor.name}`);
    newNames.push(contributor.name);
    packageJson.contributors.push(contributor);
  }
});

if (newNames.length !== 0) {
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('package.json updated with new contributors.');
  let message = `Added contributors: ${newNames.join(', ')}`;
  if(message.length > 50) message = `Added contributors: ${newNames.length}`;
  commit('package.json', message);
} else {
  console.log('No additional contributors found.');
}
