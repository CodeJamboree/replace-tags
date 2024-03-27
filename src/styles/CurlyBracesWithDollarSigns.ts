import ReplaceTagsOptions from "../ReplaceTagsOptions";
import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using curly braces with dollar signs (`{$` `$}`).
 * Matches tags of the form `{$variable$}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {$variable$}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBracesWithDollarSigns);
 * console.log(result); // Output: 'Hello world'
 */
const CurlyBracesWithDollarSigns: TagStyle = {
  name: "Curly Braces With Dollar Signs",
  openingTag: "{$",
  closingTag: "$}",
  tagPattern: /\{\$+(.*?)\$\}/g,
  tagStartPattern: /^\{\$/,
  tagEndPattern: /\$\}$/,
};

export default CurlyBracesWithDollarSigns;
