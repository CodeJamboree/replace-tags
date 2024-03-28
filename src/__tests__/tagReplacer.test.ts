import * as cache from "../cache";
import defaultMissingPathHandler from "../defaultMissingPathHandler";
import DoubleCurlyBraces from "../styles/DoubleCurlyBraces";
import tagReplacer from "../tagReplacer";

describe("tagReplacer", () => {
  const tagEdges = /^{{\s*|\s*}}$/g;
  beforeEach(() => {
    cache.clear();
  });
  afterAll(() => {
    cache.clear();
  });

  it("should replace tags with corresponding values", () => {
    const values = {
      name: "John Doe",
    };
    const replacer = tagReplacer(
      values,
      tagEdges,
      defaultMissingPathHandler,
    );
    expect(
      "Name: {{name}}".replace(
        DoubleCurlyBraces.tagPattern,
        replacer,
      ),
    ).toBe("Name: John Doe");
  });

  it("should handle missing values gracefully", () => {
    const values = {
      name: "John Doe",
    };
    const replacer = tagReplacer(
      values,
      tagEdges,
      defaultMissingPathHandler,
    );
    expect(
      "Age: {{age}}".replace(DoubleCurlyBraces.tagPattern, replacer),
    ).toBe("Age: {{age}}");
  });
  describe("cache", () => {
    it("should cache tag paths", () => {
      const mockName = jest.fn().mockReturnValue("John Doe");
      const values = {
        name: mockName,
      };
      const replacer = tagReplacer(
        values,
        tagEdges,
        defaultMissingPathHandler,
      );
      expect(
        "Name 1: {{name}}; Name 2: {{ name }}".replace(
          DoubleCurlyBraces.tagPattern,
          replacer,
        ),
      ).toBe("Name 1: John Doe; Name 2: John Doe");
      expect(mockName).toHaveBeenCalledTimes(1);
    });
    it("should cache sub-paths", () => {
      const mockUser = jest.fn().mockReturnValue({
        first: "John",
        last: "Doe",
      });
      const values = {
        user: mockUser,
      };
      const replacer = tagReplacer(
        values,
        tagEdges,
        defaultMissingPathHandler,
      );
      expect(
        "{{user.first}} {{ user.last }}".replace(
          DoubleCurlyBraces.tagPattern,
          replacer,
        ),
      ).toBe("John Doe");
      expect(mockUser).toHaveBeenCalledTimes(1);
    });
  });
});
