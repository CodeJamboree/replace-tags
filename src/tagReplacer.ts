import findValueByPath from "./findValueByPath";
import RegExReplacer from "./RegExReplacer";

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
  const cache = new Map<string, string>();

  /**
   * Replaces a tag with its resolved value if found; otherwise, returns the tag.
   * @param {string} match The matched tag
   * @returns {string} The resolved value if the tag matches a path in the `values` object; otherwise, the original tag.
   */
  const replacer: RegExReplacer = (match: string): string => {
    const path = match.replace(tagEdges, "");
    if (cache.has(path)) return cache.get(path) as string;
    const value = findValueByPath(values, path);

    let result: string;
    if(value === null || value === undefined) {
      result = match;
    } else if (typeof value === 'string') {
      result = value;
    } else if(typeof value === 'object') {
      result = JSON.stringify(value);
    } else {
      result = String(value);
    }
    cache.set(path, result);
    return result;
  };

  return replacer;
};
export default tagReplacer;
