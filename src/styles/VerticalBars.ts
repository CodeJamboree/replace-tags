import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using vertical bars (`|` `|`).
 * Matches tags of the form `|variable|` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello |variable|';
 * const result = replaceTags(text, { variable: 'world' }, VerticalBars);
 * console.log(result); // Output: 'Hello world'
 */
const VerticalBars: ReplaceTagsOptions = {
  tagPattern: /\|([^|]+)\|/g,
  tagStartPattern: /^\|/,
  tagEndPattern: /\|$/,
};

export default VerticalBars;
