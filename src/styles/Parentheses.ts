import Tag from "../Tag";

/**
 * Options for replacing tags using parentheses (`(` `)`).
 * Matches tags of the form `(variable)` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello (variable)';
 * const result = replaceTags(text, { variable: 'world' }, Parentheses);
 * console.log(result); // Output: 'Hello world'
 */
const Parentheses: Tag = {
  name: "Parentheses",
  openingTag: "(",
  closingTag: ")",
  tagPattern: /\(([^)]+)\)/g,
  tagStartPattern: /^\(/,
  tagEndPattern: /\)$/,
};

export default Parentheses;
