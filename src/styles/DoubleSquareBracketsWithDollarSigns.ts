import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using double square brackets with dollar signs (`[[$` `$]]`).
 * Matches tags of the form `[[$variable$]]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [[$variable$]]';
 * const result = replaceTags(text, { variable: 'world' }, DoubleSquareBracketsWithDollarSigns);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleSquareBracketsWithDollarSigns: TagStyle = {
  name: "Double Square Brackets With Dollar Signs",
  openingTag: "[[$",
  closingTag: "$]]",
  tagPattern: /\[\[\$(.*?)\$\]\]/g,
  tagStartPattern: /^\[\[\$/,
  tagEndPattern: /\$\]\]$/,
};

export default DoubleSquareBracketsWithDollarSigns;
