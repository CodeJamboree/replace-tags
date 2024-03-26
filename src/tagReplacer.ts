import findValueByPath from "./findValueByPath";
import RegExReplacer from "./RegExReplacer";
import ReplaceTagsOptions from "./ReplaceTagsOptions";

/**
 *
 * Creates a RegEx replacer function to use the corresponding values and tag style.
 * @param {object} values - The object containing values for replacement.
 * @param {ReplaceTagsOptions} options - configuration for tag parsing.
 * @returns {RegExReplacer} A function that takes a tag and replaces it with a value.
 */
const tagReplacer = (
  values: object,
  { tagStartPattern, tagEndPattern }: ReplaceTagsOptions,
): RegExReplacer => {
  /**
   * Replaces a tag with its resolved value if found; otherwise, returns the tag.
   * @param {string} match The matched tag
   * @returns {string} The resolved value if found; otherwise, the tag.
   */
  const replacer: RegExReplacer = (match: string): string => {
    const path = match
      .replace(
        new RegExp(
          `${tagStartPattern.source}|${tagEndPattern.source}`,
          "g",
        ),
        "",
      )
      .trim();
    const value = findValueByPath(values, path);
    return `${value ?? match}`;
  };

  return replacer;
};
export default tagReplacer;
