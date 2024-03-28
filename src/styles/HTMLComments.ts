import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using HTML comments (`<!--` `-->`).
 * Matches tags of the form `<!--variable-->` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <!--variable-->';
 * const result = replaceTags(text, { variable: 'world' }, HTMLComments);
 * console.log(result); // Output: 'Hello world'
 */
const HTMLComments: TagStyle = {
  name: "HTML Comments",
  openingTag: "<!--",
  closingTag: "--!>",
  tagPattern: /<!--.*?--!>/g,
  tagStartPattern: /^<!--/,
  tagEndPattern: /--!>$/,
};

export default HTMLComments;
