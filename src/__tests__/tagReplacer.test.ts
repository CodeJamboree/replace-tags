import DoubleCurlyBraces from "../styles/DoubleCurlyBraces";
import tagReplacer from "../tagReplacer"

describe("tagReplacer", () => {
  const tagEdges = /^{{\s*|\s*}}$/g;
  it("should replace tags with corresponding values", () => {
    const values = {
      name: "John Doe",
    };
    const replacer = tagReplacer(values, tagEdges);
    expect("Name: {{name}}".replace(DoubleCurlyBraces.tagPattern, replacer)).toBe("Name: John Doe");
  });

  it("should handle missing values gracefully", () => {
    const values = {
      name: "John Doe",
    };
    const replacer = tagReplacer(values, tagEdges);
    expect("Age: {{age}}".replace(DoubleCurlyBraces.tagPattern, replacer)).toBe("Age: {{age}}");
  });
  it("should cache tag results", () => {
    const mockName = jest.fn().mockReturnValue("John Doe");
    const values = {
      name: mockName
    };
    const replacer = tagReplacer(values, tagEdges);
    expect("Name 1: {{name}}; Name 2: {{ name }}".replace(DoubleCurlyBraces.tagPattern, replacer)).toBe(
      "Name 1: John Doe; Name 2: John Doe");
    expect(mockName).toHaveBeenCalledTimes(1);
  });
});
