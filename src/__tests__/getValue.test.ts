import getValue from "../getValue";

describe("getValue", () => {
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
    expect(getValue(null, "name", "", "")).toBe(undefined);
  });
  describe("functional values", () => {
    it("resolves functional values", () => {
      expect(
        getValue({ name: () => "John Doe" }, "name", "", ""),
      ).toBe("John Doe");
    });
    it("passes key as arg1 to function", () => {
      const nameCallback = jest.fn().mockReturnValue("John Doe");
      const source = { name: nameCallback };
      const key = "name";
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
      const source = { name: nameCallback };
      const key = "name";
      const currentPath = "currentPath";
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
      const source = { name: nameCallback };
      const key = "name";
      const currentPath = "currentPath";
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
