import replaceTags from "../../replaceTags";
import DollarSignsWithSquareBrackets from "../DollarSignsWithSquareBrackets";

describe( "DollarSignsWithSquareBrackets", () => {
  const values = { 
    key: "Key Value",
    parent: {
      child: "Child Value"
    },
    array: [
      "Array 0 Value"
    ],
    nestedArray: [
      [
        "Nested 0 0 Value"
      ]
    ]
  };
  it("replaces root key", () => {
    const text = "$[key]$";
    expect(replaceTags(text, values, DollarSignsWithSquareBrackets)).toBe(
      "Key Value",
    );
  });
  it("replaces multiple tags", () => {
    const text = "$[key]$$[key]$";
    expect(replaceTags(text, values, DollarSignsWithSquareBrackets)).toBe(
      "Key ValueKey Value",
    );
  });
  it("replaces parent child key", () => {
    const text = "$[parent.child]$";
    expect(replaceTags(text, values, DollarSignsWithSquareBrackets)).toBe(
      "Child Value",
    );
  });
  it("replaces array key", () => {
    const text = "$[array[0]]$";
    expect(replaceTags(text, values, DollarSignsWithSquareBrackets)).toBe(
      "Array 0 Value",
    );
  });
  it("replaces nested array key", () => {
    const text = "$[nestedArray[0][0]]$";
    expect(replaceTags(text, values, DollarSignsWithSquareBrackets)).toBe(
      "Nested 0 0 Value",
    );
  });
});
