import appendPathKey from "../appendPathKey";

describe("appendPathKey", () => {
  it("combines paths with dot", () => {
    expect(appendPathKey("first", "second")).toBe("first.second");
  });
  it("returns segment when prefix is missing", () => {
    expect(appendPathKey(undefined, "second")).toBe("second");
  });
});
