import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using square brackets and hyphens (`[-` `-]`).
 * Matches tags of the form `[-variable-]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [-variable-]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBracketsWithHyphens);
 * console.log(result); // Output: 'Hello world'
 */
const SquareBracketsWithHyphens: TagStyle = {
  name: "Square Brackets With Hyphens",
  openingTag: "[-",
  closingTag: "-]",
  tagPattern: /\[-[^-]+?-\]/g,
  tagStartPattern: /^\[-/,
  tagEndPattern: /-\]$/,
};

export default SquareBracketsWithHyphens;
