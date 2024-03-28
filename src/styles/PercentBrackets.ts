import TagStyle from "../TagStyle";
import AngleBracketsWithPercentSigns from "./AngleBracketsWithPercentSigns";
/**
 * Options for replacing tags using angle brackets with percent signs (`<%` `%>`).
 * Matches tags of the form `<%variable%>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <%variable%>';
 * const result = replaceTags(text, { variable: 'world' }, PercentBrackets);
 * console.log(result); // Output: 'Hello world'
 */
const PercentBrackets: TagStyle = {
  ...AngleBracketsWithPercentSigns,
  name: "Percent Brackets",
};

export default PercentBrackets;
