import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using hand emojis pointing in at the variable (`👉` `👈`).
 * Matches tags of the form `👉variable👈` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello 👉variable👈';
 * const result = replaceTags(text, { variable: 'world' }, Pointy);
 * console.log(result); // Output: 'Hello world'
 */
const Pointy: TagStyle = {
  name: "Pointy",
  openingTag: "\uD83D\uDC49",
  closingTag: "\uD83D\uDC48",
  tagPattern: /\uD83D\uDC49([^\uD83D\uDC48]+)\uD83D\uDC48/gu,
  tagStartPattern: /^\uD83D\uDC49/u,
  tagEndPattern: /\uD83D\uDC48$/u,
};

export default Pointy;
