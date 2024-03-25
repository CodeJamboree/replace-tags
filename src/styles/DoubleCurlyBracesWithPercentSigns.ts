import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using double curly braces with percent signs (`{{%` `%}}`).
 * Matches tags of the form `{{%variable%}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{%variable%}}';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCurlyBracesWithPercentSign);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleCurlyBracesWithPercentSign: ReplaceTagsOptions = {
  tagPattern: /\{\{%([^%]+)%\}\}/g,
  tagStartPattern: /^\{\{%/,
  tagEndPattern: /%\}\}$/,
};

export default DoubleCurlyBracesWithPercentSign;
