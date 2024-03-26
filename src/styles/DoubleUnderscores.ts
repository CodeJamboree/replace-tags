import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using double underscores (`__` `__`).
 * Matches tags of the form `__variable__` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello __variable__';
 * const result = replaceTags(text, { variable: 'world' }, DoubleUnderscores);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleUnderscores: ReplaceTagsOptions = {
  tagPattern: /__+.+?__+/g,
  tagStartPattern: /^__/,
  tagEndPattern: /__$/,
};

export default DoubleUnderscores;
