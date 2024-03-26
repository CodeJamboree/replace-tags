import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using double square brackets (`[[` `]]`).
 * Matches tags of the form `[[variable]]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [[variable]]';
 * const result = replaceTags(text, { variable: 'world' }, DoubleSquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleSquareBrackets: ReplaceTagsOptions = {
  tagPattern: /\[\[.*?\]\]+/g,
  tagStartPattern: /^\[\[/,
  tagEndPattern: /\]\]$/,
};

export default DoubleSquareBrackets;
