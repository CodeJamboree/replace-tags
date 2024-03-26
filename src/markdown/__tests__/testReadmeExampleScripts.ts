import fs from "fs";
import path from "path";
import packageJson from "../../../package.json";
import JavaScriptMarkdown from "../JavaScriptMarkdown";
import { execSync } from "child_process";
import crypto from "crypto";
import { tmpdir } from "os";
import { MatcherContext } from "expect";

const testReadmeExampleScripts = (
  packageEntryKey: "main" | "devMain",
) => {
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

  expect.extend({
    toHaveLengthLessThanOrEqualTo(
      this: MatcherContext,
      received: any,
      maxLength: number,
    ) {
      const pass = received.length <= maxLength;
      const message = pass
        ? () =>
            `expected ${received} length to be more than ${maxLength}`
        : () =>
            `expected "${received}" length not to be more than ${maxLength}`;

      return {
        pass,
        message,
      };
    },
  });

  const runScript = (script: string) => {
    // replace package name with path to entry script as build artifact
    const packageScript = path.resolve(
      `./${packageJson[packageEntryKey]}`,
    );
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
        if ("stderr" in error && error.stderr !== null)
          return `${error.stderr}`;
      }
      return `${error}`;
    }
  };

  describe(`JavaScript Examples using package.${packageEntryKey}`, () => {
    it(`Has at least 1 sample.`, () => {
      expect(scripts.length).toBeGreaterThan(0);
    });
    const outputPattern = /\/\/ Output: (.*)/g;
    scripts.forEach((script, index) => {
      const outputs: string[] = [];
      beforeAll(() => {
        let match: RegExpExecArray | null;
        while ((match = outputPattern.exec(script)) !== null) {
          outputs.push(match[1].trim());
        }
      });
      describe(`Sample ${index + 1}`, () => {
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
    });
  });
};

export default testReadmeExampleScripts;
