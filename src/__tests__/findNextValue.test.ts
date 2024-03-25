import findNextValue from "../findNextValue";
import NextValue from "../NextValue";

describe("findNextValue", () => {
  describe("value found", () => {
    let nextValue: NextValue;
    const segmentValue = "The Name";
    const currentPath = "The Current Path";
    const fullPath = "The Full Path";
    const segmentKey = "The Segment";
    beforeAll(() => {
      nextValue = findNextValue(
        {
          value: { [segmentKey]: segmentValue },
          currentPath,
          fullPath,
        },
        segmentKey,
      );
    });
    it("resolves the next value", () => {
      expect(nextValue.value).toBe(segmentValue);
    });
    it("appends the current path", () => {
      expect(nextValue.currentPath).toBe(
        `${currentPath}.${segmentKey}`,
      );
    });
    it("retains the fullPath", () => {
      expect(nextValue.fullPath).toBe(fullPath);
    });
  });
});
