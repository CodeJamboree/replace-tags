import fs from "fs";
import path from "path";
import packageJson from "../../package.json";
import { execSync } from "child_process";
import crypto from "crypto";
import { tmpdir } from "os";
import "./toHaveLengthLessThanOrEqualTo";

const addTestsForScript = (script: string) => {
  describe(`JavaScript`, () => {
    addTestsForScriptEnvironment(script, "main");
    addTestsForScriptEnvironment(script, "devMain");
  });
};

const addTestsForScriptEnvironment = (
  script: string,
  packageEntryKey: "main" | "devMain",
) => {
  const runScript = (script: string) => {
    // replace package name with path to entry script as build artifact
    const packageScript = path.resolve(
      `./${packageJson[packageEntryKey]}`,
    );
    const text = script.replace(packageJson.name, packageScript);

    // create temp file name based on content
    const hasher = crypto.createHash("sha256");
    hasher.update(text + " ");
    const hash = hasher.digest("hex");
    const tempFile = `test-script-${hash}.js`;
    const tempFilePath = path.join(tmpdir(), tempFile);

    fs.writeFileSync(tempFilePath, text);
    try {
      return execSync(`node ${tempFilePath}`).toString();
    } catch (error) {
      console.error("Failed to execute script: %s", tempFilePath);
      if (typeof error === "object" && error !== null) {
        if ("stderr" in error && error.stderr !== null)
          return `${error.stderr}`;
      }
      return `${error}`;
    }
  };

  describe(`${packageEntryKey === "main" ? "production" : "development"}`, () => {
    const outputPattern = /\/\/ Output: (.*)/g;
    const outputs: string[] = [];
    beforeAll(() => {
      let match: RegExpExecArray | null;
      while ((match = outputPattern.exec(script)) !== null) {
        outputs.push(match[1].trim());
      }
    });
    it("is not empty", () => {
      expect(script).not.toBe("");
    });
    it("has output", () => {
      expect(script).toMatch(outputPattern);
    });
    describe("lines", () => {
      script.split("\n").forEach((line, lineIndex) => {
        describe(`Line ${lineIndex + 1}`, () => {
          it("is not too long", () => {
            // @ts-expect-error
            expect(line).toHaveLengthLessThanOrEqualTo(70);
          });
        });
      });
    });
    it("runs with expected output", () => {
      const output = runScript(script).trim();
      expect(output).toEqual(outputs.join("\n"));
    });
  });
};

export default addTestsForScript;
