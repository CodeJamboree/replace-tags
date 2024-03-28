import Tag from "../Tag";

/**
 * Options for replacing tags using square brackets (`[` `]`).
 * Matches tags of the form `[variable]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [variable]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
const SquareBrackets: Tag = {
  name: "Square Brackets",
  openingTag: "[",
  closingTag: "]",
  tagPattern: /\[\s*(\.?[^[]*(\[[^\]]+\])*)+\s*\]+/g,
  tagStartPattern: /^\[/,
  tagEndPattern: /\]$/,
};

export default SquareBrackets;
