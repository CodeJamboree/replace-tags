import ReplaceTagsOptions from "../ReplaceTagsOptions";
import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using percent signs (`%{` `}%`).
 * Matches tags of the form `%{variable}%` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello %{variable}%';
 * const result = replaceTags(text, { variable: 'world' }, PercentSigns);
 * console.log(result); // Output: 'Hello world'
 */
const PercentSigns: TagStyle = {
  name: "Percent Signs",
  openingTag: "%{",
  closingTag: "}%",
  tagPattern: /%\{([^}]+)\}%/g,
  tagStartPattern: /^%\{/,
  tagEndPattern: /\}%$/,
};

export default PercentSigns;
