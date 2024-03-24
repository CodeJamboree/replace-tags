const { execSync } = require('child_process');

const commit = (file, message) => {
  execSync(`git add ${file}`);
  execSync(`git commit -m "${message}"`);
  console.log('committed', message);
}

module.exports = commit;
