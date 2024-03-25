import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using triple curly braces (`{{{` `}}}`).
 * Matches tags of the form `{{{variable}}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{{variable}}}';
 * const result = replaceTags(text, { variable: 'world' }, TripleCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const TripleCurlyBraces: ReplaceTagsOptions = {
  tagPattern: /\{\{\{([^}]+)\}\}\}/g,
  tagStartPattern: /^\{\{\{/,
  tagEndPattern: /\}\}\}$/,
};

export default TripleCurlyBraces;
