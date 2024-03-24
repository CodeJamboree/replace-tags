const { execSync } = require('child_process');

const getContributors = () => {
  const gitLog = execSync('git log --format="%aN <%aE>"').toString();
  return Array.from(new Set(gitLog.trim().split('\n'))).map(asContributor);
}

const asContributor = log => {
  let [, name, , email] = log.match(/^(.*?)\s*(<([^>]+)>)?$/);
  let url;
  const github = /(.+)@users\.noreply\.github\.com/;
  if (github.test(email)) url = `https://github.com/${email.match(github)[0]}`;
  const contributor = { name, email, url };
  Object.keys(contributor).forEach(key => { if (!contributor[key]) delete contributor[key]; });
  return contributor;
}

module.exports =  getContributors;
