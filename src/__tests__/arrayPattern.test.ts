import arrayPattern from "../arrayPattern";

describe("arrayPattern", () => {
  afterEach(() => {
    arrayPattern.lastIndex = 0;
  });
  it("matches array", () => {
    expect(arrayPattern.test("[0]")).toBe(true);
  });
  it("matches key with array", () => {
    expect(arrayPattern.test("hello[0]")).toBe(true);
  });
  it("matches key with array and multiple digits", () => {
    expect(arrayPattern.test("hello[123]")).toBe(true);
  });
  it("does not match values without brackets", () => {
    expect(arrayPattern.test("hello")).toBe(false);
  });
  it("matches the digits within", () => {
    const segment = "hello[1]";
    let match = arrayPattern.exec(segment);
    expect(match?.[1]).toBe("1");
  });
  it("matches multiple digits within", () => {
    const segment = "hello[123]";
    let match = arrayPattern.exec(segment);
    expect(match?.[1]).toBe("123");
  });
  it("matches nested arrays", () => {
    const segment = "hello[1][2][3]";
    let match = arrayPattern.exec(segment);
    expect(match?.[1]).toBe("1");
    match = arrayPattern.exec(segment);
    expect(match?.[1]).toBe("2");
    match = arrayPattern.exec(segment);
    expect(match?.[1]).toBe("3");
  });
});
