import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using backticks (` `` ` ` `` `).
 * Matches tags of the form ` ``variable`` ` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ``variable``';
 * const result = replaceTags(text, { variable: 'world' }, Backticks);
 * console.log(result); // Output: 'Hello world'
 */
const Backticks: ReplaceTagsOptions = {
  tagPattern: /``([^`]+)``/g,
  tagStartPattern: /^``/,
  tagEndPattern: /``$/,
};

export default Backticks;
