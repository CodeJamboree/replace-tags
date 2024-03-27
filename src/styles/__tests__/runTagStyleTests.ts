import replaceTags from "../../replaceTags";
import TagStyle from "../TagStyle";

const runTagStyleTests = (tagStyle: TagStyle) => {
  const { openingTag, closingTag } = tagStyle;

  const underscoreKey = "__under_score__";
  const dollarKey = "$$dol$lar$$";
  const emojiKey = "😎";

  const values = {
    [emojiKey]: "Emoji Value",
    key: "Key Value",
    key1: "Key 1 Value",
    key2: "Key 2 Value",
    parent: {
      child: "Child Value",
    },
    array: ["Array 0 Value"],
    [underscoreKey]: "Underscore Value",
    [dollarKey]: "Dollar Value",
    nestedArray: [["Nested 0 0 Value"]],
    "0": "Root Array 0 Value",
  };

  it("replaces root key", () => {
    const text = `${openingTag}key${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.key);
  });
  it("replaces emoji key", () => {
    const text = `${openingTag}${emojiKey}${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      values[emojiKey],
    );
  });
  it("replaces underscore key", () => {
    const text = `${openingTag}${underscoreKey}${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      values[underscoreKey],
    );
  });
  it("replaces dollar key", () => {
    const text = `${openingTag}${dollarKey}${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      values[dollarKey],
    );
  });
  it("replaces multiple tags", () => {
    const text = `${openingTag}key1${closingTag} ${openingTag}key2${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      `${values.key1} ${values.key2}`,
    );
  });
  it("replaces duplicate tags", () => {
    const text = `${openingTag}key${closingTag} ${openingTag}key${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      `${values.key} ${values.key}`,
    );
  });
  it("replaces parent child key", () => {
    const text = `${openingTag}parent.child${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      values.parent.child,
    );
  });
  it("replaces parent with JSON of value", () => {
    const text = `${openingTag}parent${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      JSON.stringify(values.parent),
    );
  });
  it("replaces array key", () => {
    const text = `${openingTag}array[0]${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.array[0]);
  });
  it("replaces root array", () => {
    const text = `${openingTag}[0]${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[0]);
  });
  it("replaces root array as key", () => {
    const text = `${openingTag}0${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[0]);
  });
  it("replaces root key as array", () => {
    const text = `${openingTag}[key]${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.key);
  });
  it("replaces nested array key", () => {
    const text = `${openingTag}nestedArray[0][0]${closingTag}`;
    expect(replaceTags(text, values, tagStyle)).toBe(
      values.nestedArray[0][0],
    );
  });
};

export default runTagStyleTests;
