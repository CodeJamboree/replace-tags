import getOptionsWithDefaults from "../getOptionsWithDefaults";
import ReplaceTagsOptions from "../ReplaceTagsOptions";
import DoubleCurlyBraces from "../styles/DoubleCurlyBraces";

describe("getOptionsWithDefaults", () => {
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
