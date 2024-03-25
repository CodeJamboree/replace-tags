import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using angle brackets with percent signs (`<%` `%>`).
 * Matches tags of the form `<%variable%>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <%variable%>';
 * const result = replaceTags(text, { variable: 'world' }, AngleBracketsWithPercentSigns);
 * console.log(result); // Output: 'Hello world'
 */
const AngleBracketsWithPercentSigns: ReplaceTagsOptions = {
  tagPattern: /<%([^%]+)%>/g,
  tagStartPattern: /^<%/,
  tagEndPattern: /%>$/,
};

export default AngleBracketsWithPercentSigns;
