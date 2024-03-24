const { execSync } = require("child_process");

const commands = [
  "node ./scripts/update-contributors",
  "npm run test",
  "npm version patch",
  "node ./scripts/git/pushTags",
  "npm run build",
  "npm publish --access public",
];

commands.forEach((command) => {
  console.log("RUNNING", command);
  try {
    execSync(command);
  } catch (e) {
    console.error("Command failed", e.message);
    process.exit(1);
  }
});
