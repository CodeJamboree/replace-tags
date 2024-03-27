import ReplaceTagsOptions from "../ReplaceTagsOptions";
import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using exclamation marks (`!` `!`).
 * Matches tags of the form `!{variable}!` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello !{variable}!';
 * const result = replaceTags(text, { variable: 'world' }, ExclamationMarks);
 * console.log(result); // Output: 'Hello world'
 */
const ExclamationMarks: TagStyle = {
  name: "Exclamation Marks",
  openingTag: "!{",
  closingTag: "}!",
  tagPattern: /!\{([^}]+)\}!/g,
  tagStartPattern: /^!\{/,
  tagEndPattern: /\}!$/,
};

export default ExclamationMarks;
