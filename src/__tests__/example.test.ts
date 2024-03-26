import fs from "fs";

import addTestsForScript from "./addTestsForScript";

const script = fs.readFileSync("./example.js", "utf8");

describe("example.js", () => {
  addTestsForScript(script);
});
