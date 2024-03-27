import getValueFromIndicies from "../getValueFromIndicies";

describe("getValueFromIndicies", () => {
  it("should retrieve the value from an array based on the provided segment", () => {
    const value = [[1, 2, 3]];
    const indices = "[0][2]";
    const currentPath = "users";
    const path = "users[0][2]name";
    const result = getValueFromIndicies(
      value,
      indices,
      currentPath,
      path,
    );
    expect(result).toEqual(3);
  });
});
