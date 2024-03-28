import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using double at signs (`@@` `@@`).
 * Matches tags of the form `@@variable@@` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello @@variable@@';
 * const result = replaceTags(text, { variable: 'world' }, DoubleAtSigns);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleAtSigns: TagStyle = {
  name: "Double At Signs",
  openingTag: "@@",
  closingTag: "@@",
  tagPattern: /@@[^@]+@@/g,
  tagStartPattern: /^@@/,
  tagEndPattern: /@@$/,
};

export default DoubleAtSigns;
