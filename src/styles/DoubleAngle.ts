import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using double angle brackets (`«` `»`).
 * Matches tags of the form `«variable»` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello «variable»';
 * const result = replaceTags(text, { variable: 'world' }, DoubleAngle);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleAngle: TagStyle = {
  name: "Double Angle",
  openingTag: "\xAB",
  closingTag: "\xBB",
  tagPattern: /\xAB([^\xBB]+)\xBB/g,
  tagStartPattern: /^\xAB/,
  tagEndPattern: /\xBB$/,
};

export default DoubleAngle;
