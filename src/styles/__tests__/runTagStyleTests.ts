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
    const text = `${tagStart}key${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.key);
  });
  it("replaces emoji key", () => {
    const text = `${tagStart}${emojiKey}${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[emojiKey]);
  });
  it("replaces underscore key", () => {
    const text = `${tagStart}${underscoreKey}${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[underscoreKey]);
  });
  it("replaces dollar key", () => {
    const text = `${tagStart}${dollarKey}${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[dollarKey]);
  });
  it("replaces multiple tags", () => {
    const text = `${tagStart}key1${tagEnd} ${tagStart}key2${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(`${values.key1} ${values.key2}`);
  });
  it("replaces duplicate tags", () => {
    const text = `${tagStart}key${tagEnd} ${tagStart}key${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(`${values.key} ${values.key}`);
  });
  it("replaces parent child key", () => {
    const text = `${tagStart}parent.child${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.parent.child);
  });
  it("replaces parent with JSON of value", () => {
    const text = `${tagStart}parent${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(JSON.stringify(values.parent));
  });
  it("replaces array key", () => {
    const text = `${tagStart}array[0]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.array[0]);
  });
  it("replaces root array", () => {
    const text = `${tagStart}[0]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[0]);
  });
  it("replaces root array as key", () => {
    const text = `${tagStart}0${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values[0]);
  });
  it("replaces root key as array", () => {
    const text = `${tagStart}[key]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.key);
  });
  it("replaces nested array key", () => {
    const text = `${tagStart}nestedArray[0][0]${tagEnd}`;
    expect(replaceTags(text, values, tagStyle)).toBe(values.nestedArray[0][0]);
  });
};

export default runTagStyleTests;
