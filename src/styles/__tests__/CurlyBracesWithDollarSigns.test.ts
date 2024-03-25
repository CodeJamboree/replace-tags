import replaceTags from "../../replaceTags";
import CurlyBracesWithDollarSigns from "../CurlyBracesWithDollarSigns";

describe("CurlyBracesWithDollarSigns", () => {
  const values = { 
    key: "Key Value",
    parent: {
      child: "Child Value"
    },
    array: [
      "Array 0 Value"
    ]
  };
  it("replaces root key", () => {
    const text = "{$key$}";
    expect(replaceTags(text, values, CurlyBracesWithDollarSigns)).toBe(
      "Key Value",
    );
  });
  it("replaces multiple tags", () => {
    const text = "{$key$}{$key$}";
    expect(replaceTags(text, values, CurlyBracesWithDollarSigns)).toBe(
      "Key ValueKey Value",
    );
  });
  it("replaces parent child key", () => {
    const text = "{$parent.child$}";
    expect(replaceTags(text, values, CurlyBracesWithDollarSigns)).toBe(
      "Child Value",
    );
  });
  it("replaces array key", () => {
    const text = "{$array[0]$}";
    expect(replaceTags(text, values, CurlyBracesWithDollarSigns)).toBe(
      "Array 0 Value",
    );
  });
});
