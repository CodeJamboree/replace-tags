/**
 * The RegExReplacer interface defines a function that takes a string and returns a string.
 * @param {string} match - The matched tag.
 * @returns {string} The resolved value if the tag matches a path in the `values` object; otherwise, the original tag.
 * @example
 * const replacer: RegExReplacer = (match: string): string => {
 *  match === "hello" ? "world" : "hello";
 * };
 */
interface RegExReplacer {
  /**
   * Function that takes a match string as an argument and returns a replacement string.
   * @param match - The matched tag.
   * @returns The resolved value if the tag matches a path in the `values` object; otherwise, the original tag.
   */
  (match: string): string;
}

export default RegExReplacer;
