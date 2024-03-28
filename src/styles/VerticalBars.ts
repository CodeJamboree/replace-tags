import Tag from "../Tag";

/**
 * Options for replacing tags using vertical bars (`|` `|`).
 * Matches tags of the form `|variable|` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello |variable|';
 * const result = replaceTags(text, { variable: 'world' }, VerticalBars);
 * console.log(result); // Output: 'Hello world'
 */
const VerticalBars: Tag = {
  name: "Vertical Bars",
  openingTag: "|",
  closingTag: "|",
  tagPattern: /\|([^|]+)\|/g,
  tagStartPattern: /^\|/,
  tagEndPattern: /\|$/,
};

export default VerticalBars;
