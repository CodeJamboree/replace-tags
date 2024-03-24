const packageJson = require("../package.json");
const assertCommitted = require("./git/assertCommitted");
const createRelease = require("./gitHub/createRelease");

const tagName = `v${packageJson.version}`;
const targetDir = "dist";
const title = `Release ${tagName}`;
const notes = "This is an automated release.";

assertCommitted();

createRelease(tagName, targetDir, title, notes);
