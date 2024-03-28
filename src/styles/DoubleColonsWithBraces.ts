import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using double colons with braces (`::` `::`).
 * Matches tags of the form `::{variable}::` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ::{variable}::';
 * const result = replaceTags(text, { variable: 'world' }, DoubleColonsWithBraces);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleColonsWithBraces: TagStyle = {
  name: "Double Colons With Braces",
  openingTag: "::{",
  closingTag: "}::",
  tagPattern: /::\{[^}]+\}::/g,
  tagStartPattern: /^::\{/,
  tagEndPattern: /\}::$/,
};

export default DoubleColonsWithBraces;
