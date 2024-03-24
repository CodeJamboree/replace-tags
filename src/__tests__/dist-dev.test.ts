import replaceTags from "../../dist-dev/index.js";

describe("dist", () => {
  it("replaces tag", () => {
    const text = "Hello {{name}}!";
    const values = { name: "World" };
    expect(replaceTags(text, values)).toBe("Hello World!");
  });
});
