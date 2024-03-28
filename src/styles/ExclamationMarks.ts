import Tag from "../Tag";

/**
 * Options for replacing tags using exclamation marks (`!` `!`).
 * Matches tags of the form `!{variable}!` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello !{variable}!';
 * const result = replaceTags(text, { variable: 'world' }, ExclamationMarks);
 * console.log(result); // Output: 'Hello world'
 */
const ExclamationMarks: Tag = {
  name: "Exclamation Marks",
  openingTag: "!{",
  closingTag: "}!",
  tagPattern: /!\{([^}]+)\}!/g,
  tagStartPattern: /^!\{/,
  tagEndPattern: /\}!$/,
};

export default ExclamationMarks;
