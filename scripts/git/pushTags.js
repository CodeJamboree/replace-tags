const { execSync } = require("child_process");

const assertCommitted = () => {
  try {
    execSync("git push --tags");
    console.log("Tags pushed.");
  } catch (error) {
    console.error("Error pushing tags:", error);
    process.exit(1);
  }
};

module.exports = assertCommitted;
