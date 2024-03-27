import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using curly braces (`{` `}`).
 * Matches tags of the form `{variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {variable}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const CurlyBraces: ReplaceTagsOptions = {
  tagPattern: /\{[^}]*\}/g,
  tagStartPattern: /^\{/,
  tagEndPattern: /\}$/,
};

export default CurlyBraces;
