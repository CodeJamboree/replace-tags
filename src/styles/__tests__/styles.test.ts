import fs from "fs";
import path from "path";
import replaceTags from "../../replaceTags";
import Tag from "../../Tag";

const runtagTests = (tag: Tag) => {
  const { openingTag, closingTag } = tag;

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
    expect(replaceTags(text, values, tag)).toBe(values.key);
  });
  it("replaces emoji key", () => {
    const text = `${openingTag}${emojiKey}${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values[emojiKey]);
  });
  it("replaces underscore key", () => {
    const text = `${openingTag}${underscoreKey}${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(
      values[underscoreKey],
    );
  });
  it("replaces dollar key", () => {
    const text = `${openingTag}${dollarKey}${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values[dollarKey]);
  });
  it("replaces multiple tags", () => {
    const text = `${openingTag}key1${closingTag} ${openingTag}key2${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(
      `${values.key1} ${values.key2}`,
    );
  });
  it("replaces duplicate tags", () => {
    const text = `${openingTag}key${closingTag} ${openingTag}key${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(
      `${values.key} ${values.key}`,
    );
  });
  it("replaces parent child key", () => {
    const text = `${openingTag}parent.child${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values.parent.child);
  });
  it("replaces parent with JSON of value", () => {
    const text = `${openingTag}parent${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(
      JSON.stringify(values.parent),
    );
  });
  it("replaces array key", () => {
    const text = `${openingTag}array[0]${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values.array[0]);
  });
  it("replaces root array", () => {
    const text = `${openingTag}[0]${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values[0]);
  });
  it("replaces root array as key", () => {
    const text = `${openingTag}0${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values[0]);
  });
  it("replaces root key as array", () => {
    const text = `${openingTag}[key]${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(values.key);
  });
  it("replaces nested array key", () => {
    const text = `${openingTag}nestedArray[0][0]${closingTag}`;
    expect(replaceTags(text, values, tag)).toBe(
      values.nestedArray[0][0],
    );
  });
};

fs.readdirSync(path.join(__dirname, "../"))
  .filter((file) => file.endsWith(".ts"))
  .forEach((file) => {
    const style = require(`../${file}`).default;
    describe(file, () => {
      runtagTests(style);
    });
  });
