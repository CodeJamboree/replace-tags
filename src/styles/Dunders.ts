import DoubleUnderscores from "./DoubleUnderscores";
import TagStyle from "../TagStyle";

/**
 * Options for replacing tags using double underscores (`__` `__`).
 * Matches tags of the form `__variable__` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello __variable__';
 * const result = replaceTags(text, { variable: 'world' }, Dunders);
 * console.log(result); // Output: 'Hello world'
 */
const Dunders: TagStyle = {
  ...DoubleUnderscores,
  name: "Dunders",
};

export default Dunders;
