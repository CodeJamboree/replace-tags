import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using double square brackets with dollar signs (`[[$` `$]]`).
 * Matches tags of the form `[[$variable$]]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [[$variable$]]';
 * const result = replaceTags(text, { variable: 'world' }, DoubleSquareBracketsWithDollarSigns);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleSquareBracketsWithDollarSigns: ReplaceTagsOptions = {
  tagPattern: /\[\[\$[^$]+\$\]\]/g,
  tagStartPattern: /^\[\[\$/,
  tagEndPattern: /\$\]\]$/,
};

export default DoubleSquareBracketsWithDollarSigns;
