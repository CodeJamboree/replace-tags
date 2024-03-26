import replaceTags from "../../replaceTags";
import ReplaceTagsOptions from "../../ReplaceTagsOptions";

const runTagStyleTests = (
  tagStart: string,
  tagEnd: string,
  tagStyle: ReplaceTagsOptions,
) => {
  const underscoreKey = "__under_score__";
  const dollarKey = "$$dol$lar$$";
  const emojiKey = "😎";

  const values = {
    [emojiKey]: "Emoji Value",
    key: "Key Value",
    parent: {
      child: "Child Value",
    },
    array: ["Array 0 Value"],
    [underscoreKey]: "Underscore Value",
    [dollarKey]: "Dollar Value",
    nestedArray: [["Nested 0 0 Value"]],
    "0": ["Root Array 0 Value"],
  };

  it("replaces root key", () => {
    const text = `${tagStart}key${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe("Key Value");
  });
  it("replaces emoji key", () => {
    const text = `${tagStart}${emojiKey}${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe("Emoji Value");
  });
  it("replaces underscore key", () => {
    const text = `${tagStart}${underscoreKey}${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      "Underscore Value",
    );
  });
  it("replaces dollar key", () => {
    const text = `${tagStart}${dollarKey}${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe("Dollar Value");
  });
  it("replaces multiple tags", () => {
    const text = `${tagStart}key${tagEnd} ${tagStart}key${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      "Key Value Key Value",
    );
  });
  it("replaces parent child key", () => {
    const text = `${tagStart}parent.child${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe("Child Value");
  });
  it("replaces array key", () => {
    const text = `${tagStart}array[0]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe("Array 0 Value");
  });
  it("replaces root array", () => {
    const text = `${tagStart}[0]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      "Root Array 0 Value",
    );
  });
  it("replaces root key as array", () => {
    const text = `${tagStart}[key]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe("Key Value");
  });
  it("replaces nested array key", () => {
    const text = `${tagStart}nestedArray[0][0]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      "Nested 0 0 Value",
    );
  });
};

export default runTagStyleTests;
