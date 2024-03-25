import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using square brackets and colons (`[:` `:]`).
 * Matches tags of the form `[:variable:]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [:variable:]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBracketsWithColons);
 * console.log(result); // Output: 'Hello world'
 */
const SquareBracketsWithColons: ReplaceTagsOptions = {
  tagPattern: /\[:([^:]+):\]/g,
  tagStartPattern: /^\[:/,
  tagEndPattern: /:\]$/,
};

export default SquareBracketsWithColons;
