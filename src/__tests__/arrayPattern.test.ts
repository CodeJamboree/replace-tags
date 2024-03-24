import arrayPattern from "../arrayPattern";

describe("arrayPattern", () => {
  it("matches array with brackets", () => {
    expect(arrayPattern.test("hello[0]")).toBe(true);
  });
  it("matches array with multiple digits", () => {
    expect(arrayPattern.test("hello[123]")).toBe(true);
  });
  it("does not match values without brackets", () => {
    expect(arrayPattern.test("hello")).toBe(false);
  });
  it("matches the full name with group 1", () => {
    expect("hello[123]".match(arrayPattern)?.[1]).toBe("hello");
  });
  it("matches all digts with group 2", () => {
    expect("hello[123]".match(arrayPattern)?.[2]).toBe("123");
  });
});
