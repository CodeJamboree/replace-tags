import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using double curly braces (`{{` `}}`).
 * Matches tags of the form `{{variable}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{variable}}';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleCurlyBraces: TagStyle = {
  name: "Double Curly Braces",
  openingTag: "{{",
  closingTag: "}}",
  tagPattern: /\{\{([^}]+)\}\}/g,
  tagStartPattern: /^\{\{/,
  tagEndPattern: /\}\}$/,
};

export default DoubleCurlyBraces;
