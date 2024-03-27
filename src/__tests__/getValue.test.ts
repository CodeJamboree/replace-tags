import * as cache from "../cache";
import getValue from "../getValue";

describe("getValue", () => {
  beforeEach(() => {
    cache.clear();
  });
  afterAll(() => {
    cache.clear();
  });
  it("caches the result of the last successful compilation", () => {
    const name = {
      first: "John",
      last: "Doe",
    };
    const mockName = jest.fn().mockReturnValue(name);
    const source = { name: mockName };
    expect(
      getValue(source, "name", "user.name", "user.name.first"),
    ).toBe(name);
    expect(
      getValue(source, "name", "user.name", "user.name.last"),
    ).toBe(name);
    expect(mockName).toHaveBeenCalledTimes(1);
  });
  it("gets value of numeric key from source arrays", () => {
    expect(getValue(["John Doe"], "0", "", "")).toBe("John Doe");
  });
  it("gets value of non-numeric key from source arrays", () => {
    expect(getValue(["John Doe"], "length", "", "")).toBe(1);
  });
  it("gets value of key from source", () => {
    expect(getValue({ name: "John Doe" }, "name", "", "")).toBe(
      "John Doe",
    );
  });
  it("ignores null source", () => {
    expect(getValue(null, "name2", "", "")).toBe(undefined);
  });
  describe("functional values", () => {
    it("resolves functional values", () => {
      expect(
        getValue({ name3: () => "John Doe" }, "name3", "", ""),
      ).toBe("John Doe");
    });
    it("passes key as arg1 to function", () => {
      const nameCallback = jest.fn().mockReturnValue("John Doe");
      const source = { name4: nameCallback };
      const key = "name4";
      const currentPath = "currentPath";
      const fullPath = "fullPath";
      getValue(source, key, currentPath, fullPath);
      expect(nameCallback).toHaveBeenLastCalledWith(
        key,
        expect.anything(),
        expect.anything(),
      );
    });
    it("passes currentPath as arg2 to function", () => {
      const nameCallback = jest.fn().mockReturnValue("John Doe");
      const source = { name5: nameCallback };
      const key = "name5";
      const currentPath = "currentPath5";
      const fullPath = "fullPath";
      getValue(source, key, currentPath, fullPath);
      expect(nameCallback).toHaveBeenLastCalledWith(
        expect.anything(),
        currentPath,
        expect.anything(),
      );
    });
    it("passes fullPath as arg3 to function", () => {
      const nameCallback = jest.fn().mockReturnValue("John Doe");
      const source = { name6: nameCallback };
      const key = "name6";
      const currentPath = "currentPath6";
      const fullPath = "fullPath";
      getValue(source, key, currentPath, fullPath);
      expect(nameCallback).toHaveBeenLastCalledWith(
        expect.anything(),
        expect.anything(),
        fullPath,
      );
    });
  });
});
