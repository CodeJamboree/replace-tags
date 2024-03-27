import cache from "./cache";
import findValueByPath from "./findValueByPath";
import RegExReplacer from "./RegExReplacer";
import stringify from "./stringify";

/**
 *
 * Creates a RegEx replacer function to use the corresponding values and tag style.
 * @param {object} values - The object containing values for replacement.
 * @param {RegExp} tagEdges - A regular expression pattern for matching the start or end of a tag.
 * @returns {RegExReplacer} A function that takes a tag and replaces it with a value.
 */
const tagReplacer = (
  values: object,
  tagEdges: RegExp,
): RegExReplacer => {
  /**
   * Replaces a tag with its resolved value if found; otherwise, returns the tag.
   * @param {string} match The matched tag
   * @returns {string} The resolved value if the tag matches a path in the `values` object; otherwise, the original tag.
   */
  const replacer: RegExReplacer = (match: string): string => {
    const path = match.replace(tagEdges, "");
    if (cache.has(path))
      return cache.getString(path, match) as string;
    const value = findValueByPath(values, path);
    return stringify(value, match);
  };

  return replacer;
};
export default tagReplacer;
