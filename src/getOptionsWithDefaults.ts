import getRegExp from "./getRegExp";
import IgetOptionsWithDefaults from "./IgetOptionsWithDefaults";
import ReplaceTagsOptions from "./ReplaceTagsOptions";
import defaultTag from "./styles/DoubleCurlyBraces";

/**
 * Merges the provided options with default options for tag patterns.
 * @param {Partial<ReplaceTagsOptions>} [options] - Optional partial options object.
 * @returns {ReplaceTagsOptions} The merged options object with default values.
 */
const getOptionsWithDefaults: IgetOptionsWithDefaults = ({
  tagPattern,
  tagStartPattern,
  tagEndPattern,
} = defaultTag): ReplaceTagsOptions => {
  const options = {
    tagPattern: getRegExp(tagPattern, defaultTag.tagPattern),
    tagStartPattern: getRegExp(
      tagStartPattern,
      defaultTag.tagStartPattern,
    ),
    tagEndPattern: getRegExp(tagEndPattern, defaultTag.tagEndPattern),
  };
  // Global Flag Checks
  if (!options.tagPattern.global) {
    throw new Error("tagPattern not flagged as global");
  }
  if (options.tagStartPattern.global) {
    throw new Error("tagStartPattern flagged as global");
  }
  if (options.tagEndPattern.global) {
    throw new Error("tagEndPattern flagged as global");
  }
  // Start of string or line checks
  if (options.tagPattern.source.startsWith("^")) {
    throw new Error("tagPattern starts with `^`");
  }
  if (!options.tagStartPattern.source.startsWith("^")) {
    throw new Error("tagStartPattern missing prefix `^`");
  }
  if (options.tagEndPattern.source.startsWith("^")) {
    throw new Error("tagEndPattern starts with `^`");
  }
  // End of string or line checks
  if (
    options.tagPattern.source.endsWith("$") &&
    !options.tagPattern.source.endsWith("\\$")
  ) {
    throw new Error("tagPattern ends with unescaped `$`");
  }
  if (
    options.tagStartPattern.source.endsWith("$") &&
    !options.tagStartPattern.source.endsWith("\\$")
  ) {
    throw new Error("tagStartPattern ends with unescaped `$`");
  }
  if (!options.tagEndPattern.source.endsWith("$")) {
    throw new Error("tagEndPattern missing suffix `$`");
  } else if (options.tagEndPattern.source.endsWith("\\$")) {
    throw new Error("tagEndPattern ends with escaped `$`");
  }

  return options;
};

export default getOptionsWithDefaults;
