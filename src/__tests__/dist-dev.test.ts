import replaceTags from "../../dist-dev/replace-tags.js";

describe('dist', () => {
  it("replaces tag", () => {
    const text = "Hello {{name}}!";
    const values = { name: "World" };
    expect(replaceTags(text, values)).toBe("Hello World!");
  });

});
