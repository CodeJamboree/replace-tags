const { execSync } = require("child_process");

createRelease = (
  tag,
  dir = "./dist/*",
  title = `Release ${tag}`,
  notes = "This is an automated release.",
) => {
  try {
    // brew install gh
    execSync(
      `gh release create "${tag}" "${dir}" --title "${title}" --notes "${notes}" --draft=false --prerelease=false`,
    );
    console.log("released on github.");
  } catch (error) {
    console.error("Failed releasing to github:", error.message);
    process.exit(1);
  }
};

module.exports = createRelease;
