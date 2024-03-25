import findValueByPath from "./findValueByPath";
import RegExReplacer from "./RegExReplacer";
import ReplaceTagsOptions from "./ReplaceTagsOptions";

/**
 *
 * Creates a RegEx replacer function to use the corresponding values and tag style.
 * @param {object | string} values - The object containing values for replacement.
 * @param {ReplaceTagsOptions} options - configuration for tag parsing.
 * @returns {RegExReplacer} A function that takes a tag and replaces it with a value.
 */
const tagReplacer =
  (
    values: object,
    { tagStartPattern, tagEndPattern }: ReplaceTagsOptions,
  ): RegExReplacer =>
  /**
   * Replaces a tag with its resolved value
   * @param {string} match The matched tag
   * @returns {string} The replaced value
   */
  (match: string): string => {
    const path = match
      .replace(tagStartPattern, "")
      .replace(tagEndPattern, "")
      .trim();
    const value = findValueByPath(values, path);
    return value !== undefined ? `${value}` : match;
  };

export default tagReplacer;
