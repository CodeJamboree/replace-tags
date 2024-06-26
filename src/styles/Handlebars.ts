import Tag from "../Tag";
import CurlyBraces from "./CurlyBraces";

/**
 * Options for replacing tags using curly braces (`{` `}`).
 * Matches tags of the form `{variable}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {variable}';
 * const result = replaceTags(text, { variable: 'world' }, Handlebars);
 * console.log(result); // Output: 'Hello world'
 */
const Handlebars: Tag = {
  ...CurlyBraces,
  name: "Handlebars",
};

export default Handlebars;
