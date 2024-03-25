import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using angle brackets (`<<` `>>`).
 * Matches tags of the form `<<variable>>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <<variable>>';
 * const result = replaceTags(text, { variable: 'world' }, AngleBrackets);
 * console.log(result); // Output: 'Hello world'
 */
const AngleBrackets: ReplaceTagsOptions = {
  tagPattern: /<<([^>]+)>>/g,
  tagStartPattern: /^<</,
  tagEndPattern: />>$/,
};

export default AngleBrackets;
