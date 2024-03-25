import fs from "fs";
import path from "path";
import packageJson from "../../../package.json";
import JavaScriptMarkdown from "../JavaScriptMarkdown";
import { execSync } from "child_process";
import crypto from "crypto";
import { tmpdir } from "os";

const markdown = fs.readFileSync("./README.md", "utf8");

const scripts: string[] = [];
let match: string[] | null;
while ((match = JavaScriptMarkdown.tagPattern.exec(markdown)) !== null) {
  const codeMarkdown = match[0] as string;
  scripts.push(
    codeMarkdown
      .replace(JavaScriptMarkdown.tagStartPattern, "")
      .replace(JavaScriptMarkdown.tagEndPattern, ""),
  );
}

const runScript = (script: string) => {
  // replace package name with path to main entry script in dist folder
  const packageScript = path.resolve(`./${packageJson.main}`);
  const text = script.replace(packageJson.name, packageScript);

  // create temp file name based on content
  const hasher = crypto.createHash("sha256");
  hasher.update(text);
  const hash = hasher.digest("hex");
  const tempFile = `.readme.sample-${hash}.js`;
  const tempFilePath = path.join(tmpdir(), tempFile);

  fs.writeFileSync(tempFilePath, text);
  try {
    return execSync(`node ${tempFilePath}`).toString();
  } catch (error) {
    console.error("Failed to execute script: %s", tempFilePath);
    if (typeof error === "object" && error !== null) {
      if ("stderr" in error && error.stderr !== null) return `${error.stderr}`;
    }
    return `${error}`;
  }
};

describe("README.md JavaScript Examples", () => {
  it(`Has at least 1 sample.`, () => {
    expect(scripts.length).toBeGreaterThan(0);
  });
  const outputPattern = /\/\/ Output: (.*)/;
  scripts.forEach((script, index) => {
    describe(`Sample ${index + 1}`, () => {
      it("is not empty", () => {
        expect(script).not.toBe("");
      });
      it("has output", () => {
        expect(script).toMatch(outputPattern);
      });
      it("runs with expected output", () => {
        const expectedOutput = script.match(outputPattern)?.[1] as string;
        const output = runScript(script).trim();
        expect(output).toEqual(expectedOutput);
      });
    });
  });
});
