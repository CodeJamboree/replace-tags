import fs from "fs";
import JavaScriptMarkdown from "../JavaScriptMarkdown";
import addTestsForScript from "../../__tests__/addTestsForScript";

const markdown = fs.readFileSync("./README.md", "utf8");

const scripts: string[] = [];
let match: string[] | null;
while (
  (match = JavaScriptMarkdown.tagPattern.exec(markdown)) !== null
) {
  const codeMarkdown = match[0] as string;
  scripts.push(
    codeMarkdown
      .replace(JavaScriptMarkdown.tagStartPattern, "")
      .replace(JavaScriptMarkdown.tagEndPattern, ""),
  );
}

describe("README.md", () => {
  scripts.forEach((script, index) => {
    describe(`Sample ${index + 1}`, () => {
      addTestsForScript(script);
    });
  });
});
