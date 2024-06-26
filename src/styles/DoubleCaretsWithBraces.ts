import Tag from "../Tag";

/**
 * Options for replacing tags using double carets with braces (`^^` `^^`).
 * Matches tags of the form `^^{variable}^^` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ^^{variable}^^';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCaretsWithBraces);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleCaretsWithBraces: Tag = {
  name: "Double Carets With Braces",
  openingTag: "^^{",
  closingTag: "}^^",
  tagPattern: /\^\^\{[^}]+\}\^\^/g,
  tagStartPattern: /^\^\^\{/,
  tagEndPattern: /\}\^\^$/,
};

export default DoubleCaretsWithBraces;
