import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using dollar signs and square brackets (`$[` `]$`).
 * Matches tags of the form `$[variable]$` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello $[variable]$';
 * const result = replaceTags(text, { variable: 'world' }, DollarSignsWithSquareBrackets);
 * console.log(result); // Output: 'Hello world'
 */
const DollarSignsWithSquareBrackets: TagStyle = {
  name: "Dollar Signs With Square Brackets",
  openingTag: "$[",
  closingTag: "]$",
  tagPattern: /\$\[([^\]]*(?:](?!\$)[^\]]*)*)\]\$/g,
  tagStartPattern: /^\$\[/,
  tagEndPattern: /\]\$$/,
};

export default DollarSignsWithSquareBrackets;
