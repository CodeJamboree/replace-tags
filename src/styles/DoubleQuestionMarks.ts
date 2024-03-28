import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using double question marks (`??` `??`).
 * Matches tags of the form `??variable??` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello ??variable??';
 * const result = replaceTags(text, { variable: 'world' }, DoubleQuestionMarks);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleQuestionMarks: TagStyle = {
  name: "Double Question Marks",
  openingTag: "??",
  closingTag: "??",
  tagPattern: /\?\?[^?]+\?\?/g,
  tagStartPattern: /^\?\?/,
  tagEndPattern: /\?\?$/,
};

export default DoubleQuestionMarks;
