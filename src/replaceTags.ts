import ReplaceTagsOptions from "./ReplaceTagsOptions";
import tagReplacer from "./tagReplacer";
import getOptionsWithDefaults from "./getOptionsWithDefaults";

/**
 * Replaces tags in a text with corresponding values from an object.
 * @param {string} text - The text containing tags to be replaced.
 * @param {object | string} values - The object containing values for replacement.
 * @param {ReplaceTagsOptions} [options] - Optional configuration for tag parsing.
 * @returns {string} The text with replaced tags.
 */
const replaceTags = (
  text: string,
  values: object | string,
  options?: Partial<ReplaceTagsOptions>,
): string => {
  if (typeof text !== "string") return text;
  if (typeof values === "string") {
    try {
      values = JSON.parse(values) as object;
    } catch (error) {
      return text;
    }
  }
  const defaultedOptions = getOptionsWithDefaults(options);
  const pattern = defaultedOptions.tagPattern;
  return text.replace(pattern, tagReplacer(values, defaultedOptions));
};

export default replaceTags;
