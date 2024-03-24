const packageJson = require("../package.json");
const assertCommitted = require("./git/assertCommitted");
const pushTags = require("./git/pushTags");
const createRelease = require("./gitHub/createRelease");
const pack = require('./npm/pack.js');

const name = packageJson.name;
const version = packageJson.version;
const tagName = `v${version}`;
const title = `Release ${tagName}`;
const notes = "This is an automated release.";

assertCommitted();
pushTags();
pack();

const prefix = name.replace("@", "").replace('/', '-');
const file = `${prefix}-${version}.tgz`
createRelease(tagName, file, title, notes);
