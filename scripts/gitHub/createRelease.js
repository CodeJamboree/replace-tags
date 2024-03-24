const { execSync } = require("child_process");

createRelease = (
  tag,
  dir = "dist/",
  title = `Release ${tag}`,
  notes = "This is an automated release.",
) => {
  // brew install gh
  execSync(
    `gh release create "${tag}" "${dir}" --title "${title}" --notes "${notes} --draft=false --prerelease=false`,
  );
  console.log("released on github.");
};

module.exports = createRelease;
