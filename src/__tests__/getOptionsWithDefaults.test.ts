import getOptionsWithDefaults from "../getOptionsWithDefaults";
import ReplaceTagsOptions from "../ReplaceTagsOptions";
import DoubleCurlyBraces from "../styles/DoubleCurlyBraces";

describe("getOptionsWithDefaults", () => {
  describe("stateful Regular Expressions", () => {
    const options: ReplaceTagsOptions = {
      tagPattern: /<.*?>/g,
      tagStartPattern: /^</,
      tagEndPattern: />$/,
    };
    let defaultedOptions: ReplaceTagsOptions;
    beforeAll(() => {
      options.tagPattern.lastIndex = 1;
      options.tagStartPattern.lastIndex = 1;
      options.tagEndPattern.lastIndex = 1;
      defaultedOptions = getOptionsWithDefaults(options);
    });
    it("created new tagPattern", () => {
      expect(options.tagPattern.lastIndex).toBe(1);
      expect(defaultedOptions.tagPattern.lastIndex).toBe(0);
    });
    it("created new tagStartPattern", () => {
      expect(options.tagStartPattern.lastIndex).toBe(1);
      expect(defaultedOptions.tagStartPattern.lastIndex).toBe(0);
    });
    it("creates new tagEndPattern", () => {
      expect(options.tagEndPattern.lastIndex).toBe(1);
      expect(defaultedOptions.tagEndPattern.lastIndex).toBe(0);
    });
  });

  describe("non-stateful Regular Expressions", () => {
    const options: ReplaceTagsOptions = {
      tagPattern: /<.*?>/g,
      tagStartPattern: /^</,
      tagEndPattern: />$/,
    };
    let defaultedOptions: ReplaceTagsOptions;
    beforeAll(() => {
      defaultedOptions = getOptionsWithDefaults(options);
    });
    it("uses original tagPattern", () => {
      expect(options.tagPattern).toBe(defaultedOptions.tagPattern);
    });
    it("uses original tagStartPattern", () => {
      expect(options.tagStartPattern).toBe(
        defaultedOptions.tagStartPattern,
      );
    });
    it("uses original tagEndPattern", () => {
      expect(options.tagEndPattern).toBe(
        defaultedOptions.tagEndPattern,
      );
    });
  });

  describe("global flag", () => {
    it("throws error if tagPattern is not global", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagPattern: /{{.*?}}/,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagPattern not flagged as global",
      );
    });
    it("throws error if tagStartPattern is global", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagStartPattern: /^{{/g,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagStartPattern flagged as global",
      );
    });
    it("throws error if tagEndPattern is global", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagEndPattern: /}}$/g,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagEndPattern flagged as global",
      );
    });
  });
  describe("starts with ^", () => {
    it("throws error if tagPattern starts with ^", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagPattern: /^{{.*?}}/g,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagPattern starts with `^`",
      );
    });
    it("throws error if tagStartPattern does not start with ^", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagStartPattern: /{{/,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagStartPattern missing prefix `^`",
      );
    });
    it("throws error if tagEndPattern starts with ^", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagEndPattern: /^}}$/,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagEndPattern starts with `^`",
      );
    });
  });
  describe("ends with $", () => {
    it("throws error if tagPattern ends with unescaped $", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagPattern: /{{.*?}}$/g,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagPattern ends with unescaped `$`",
      );
    });
    it("does not throw error if tagPattern ends with escaped $", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagPattern: /{{.*?}}\$/g,
      };
      expect(() => getOptionsWithDefaults(options)).not.toThrow();
    });
    it("throws error if tagStartPattern ends with with unescaped $", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagStartPattern: /^{{$/,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagStartPattern ends with unescaped `$`",
      );
    });
    it("does not throw error if tagStartPattern ends with with escaped $", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagStartPattern: /^{{\$/,
      };
      expect(() => getOptionsWithDefaults(options)).not.toThrow();
    });
    it("throws error if tagEndPattern does not end with $", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagEndPattern: /}}/,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagEndPattern missing suffix `$`",
      );
    });
    it("throws error if tagEndPattern ends with escaped $", () => {
      const options: ReplaceTagsOptions = {
        ...DoubleCurlyBraces,
        tagEndPattern: /}}\$/,
      };
      expect(() => getOptionsWithDefaults(options)).toThrow(
        "tagEndPattern ends with escaped `$`",
      );
    });
  });
});
