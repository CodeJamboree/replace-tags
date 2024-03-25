const { execSync } = require("child_process");
const fs = require("fs");
const packageJson = require("../package.json");
const assertCommitted = require("./git/assertCommitted");
const getContributors = require("./git/getContributors");
const commit = require("./git/commit");

assertCommitted();

packageJson.contributors = packageJson.contributors ?? [];

const isNewContributor = (contributor) =>
  !packageJson.contributors.some(isMatch(contributor));

const isMatch =
  ({ name, email }) =>
  ({ name: otherName, email: otherEmail }) =>
    name === otherName && email === otherEmail;

const newContributors = getContributors().filter(isNewContributor);

packageJson.contributors = newContributors.reduce(
  (contributors, contributor) => {
    console.log(`New contributor found: ${contributor.name}`);
    return [...contributors, contributor];
  },
  packageJson.contributors,
);

if (newContributors.length !== 0) {
  fs.writeFileSync(
    "package.json",
    JSON.stringify(packageJson, null, 2) + "\n",
  );
  console.log("package.json updated with new contributors.");
  const names = newContributors.map(({ name }) => name).join(", ");
  let message = `Added contributors: ${names}`;
  if (message.length > 50)
    message = `Added contributors: ${newContributors.length}`;
  commit("package.json", message);
} else {
  console.log("No additional contributors found.");
}
