import Tag from "../Tag";

/**
 * Options for replacing tags using exclamation marks (`{!` `!}`).
 * Matches tags of the form `{!variable!}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {!variable!}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBracesWithExclamationMarks);
 * console.log(result); // Output: 'Hello world'
 */
const CurlyBracesWithExclamationMarks: Tag = {
  name: "Curly Braces With Exclamation Marks",
  openingTag: "{!",
  closingTag: "!}",
  tagPattern: /\{!([^!]+)!\}/g,
  tagStartPattern: /^\{!/,
  tagEndPattern: /!\}$/,
};

export default CurlyBracesWithExclamationMarks;
