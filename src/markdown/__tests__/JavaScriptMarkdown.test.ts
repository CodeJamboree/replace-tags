import JavaScriptMarkdown from "../JavaScriptMarkdown";

describe("JavaScriptMarkdown", () => {
  it("finds javascript", () => {
    expect(JavaScriptMarkdown.tagPattern.test("```js vairable ```")).toBe(true);
  });
});
