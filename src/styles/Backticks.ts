import Tag from "../Tag";

/**
 * Options for replacing tags using backticks (` `` ` ` `` `).
 * Matches tags of the form ` ``variable`` ` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ``variable``';
 * const result = replaceTags(text, { variable: 'world' }, Backticks);
 * console.log(result); // Output: 'Hello world'
 */
const Backticks: Tag = {
  name: "Backticks",
  openingTag: "``",
  closingTag: "``",
  tagPattern: /``([^`]+)``/g,
  tagStartPattern: /^``/,
  tagEndPattern: /``$/,
};

export default Backticks;
