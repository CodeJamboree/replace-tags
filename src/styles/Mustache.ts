import Tag from "../Tag";
import DoubleCurlyBraces from "./DoubleCurlyBraces";

/**
 * Options for replacing tags using double curly braces (`{{` `}}`).
 * Matches tags of the form `{{variable}}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {{variable}}';
 * const result = replaceTags(text, { variable: 'world' }, Mustache);
 * console.log(result); // Output: 'Hello world'
 */
const Mustache: Tag = {
  ...DoubleCurlyBraces,
  name: "Mustache",
};

export default Mustache;
