import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using curly braces (`{` `}`).
 * Matches tags of the form `{variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {variable}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const CurlyBraces: TagStyle = {
  name: "Curly Braces",
  openingTag: "{",
  closingTag: "}",
  tagPattern: /\{[^}]*\}/g,
  tagStartPattern: /^\{/,
  tagEndPattern: /\}$/,
};

export default CurlyBraces;
