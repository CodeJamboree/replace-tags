const { execSync } = require("child_process");

createRelease = (
  tag,
  files = "*.tgz",
  title = `Release ${tag}`,
  notes = "This is an automated release.",
) => {
  if(Array.isArray(files)) {
    files = files.join(`" "`);
  }
  try {
    // brew install gh
    execSync(
      `gh release create "${tag}" "${files}" --title "${title}" --notes "${notes}" --draft=false --prerelease=false`,
    );
    console.log("released on github.");
  } catch (error) {
    console.error("Failed releasing to github:", error.message);
    process.exit(1);
  }
};

module.exports = createRelease;
