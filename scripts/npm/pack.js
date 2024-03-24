const { execSync } = require("child_process");

pack = () => {
  try {
    execSync(`npm pack`);
    console.log("packed.");
  } catch (error) {
    console.error("Failed to pack", error.message);
    process.exit(1);
  }
};

module.exports = pack;
