import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using square brackets and hyphens (`[-` `-]`).
 * Matches tags of the form `[-variable-]` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello [-variable-]';
 * const result = replaceTags(text, { variable: 'world' }, SquareBracketsWithHyphens);
 * console.log(result); // Output: 'Hello world'
 */
const SquareBracketsWithHyphens: ReplaceTagsOptions = {
  tagPattern: /\[-[^-]+?-\]/g,
  tagStartPattern: /^\[-/,
  tagEndPattern: /-\]$/,
};

export default SquareBracketsWithHyphens;
