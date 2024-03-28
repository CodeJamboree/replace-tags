import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using double curly braces with percent signs (`{{%` `%}}`).
 * Matches tags of the form `{{%variable%}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{%variable%}}';
 * const result = replaceTags(text, { variable: 'world' }, DoubleCurlyBracesWithPercentSigns);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleCurlyBracesWithPercentSigns: TagStyle = {
  name: "Double Curly Braces With Percent Signs",
  openingTag: "{{%",
  closingTag: "%}}",
  tagPattern: /\{\{%([^%]+)%\}\}/g,
  tagStartPattern: /^\{\{%/,
  tagEndPattern: /%\}\}$/,
};

export default DoubleCurlyBracesWithPercentSigns;
