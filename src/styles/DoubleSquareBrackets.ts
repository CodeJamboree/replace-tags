import ReplaceTagsOptions from "../ReplaceTagsOptions";
import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using double square brackets (`[[` `]]`).
 * Matches tags of the form `[[variable]]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [[variable]]';
 * const result = replaceTags(text, { variable: 'world' }, DoubleSquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleSquareBrackets: TagStyle = {
  name: "Double Square Brackets",
  openingTag: "[[",
  closingTag: "]]",
  tagPattern: /\[\[.*?\]\]+/g,
  tagStartPattern: /^\[\[/,
  tagEndPattern: /\]\]$/,
};

export default DoubleSquareBrackets;
