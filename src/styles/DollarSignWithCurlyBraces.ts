import Tag from "../Tag";

/**
 * Options for replacing tags using dollar signs and curly braces (`${` `}`).
 * Matches tags of the form `${variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ${variable}';
 * const result = replaceTags(text, { variable: 'world' }, DollarSignWithCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const DollarSignWithCurlyBraces: Tag = {
  name: "Dollar Sign With Curly Braces",
  openingTag: "${",
  closingTag: "}",
  tagPattern: /\$\{([^}]+)\}/g,
  tagStartPattern: /^\$\{/,
  tagEndPattern: /\}$/,
};

export default DollarSignWithCurlyBraces;
