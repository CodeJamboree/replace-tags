import AngleBrackets from "./AngleBrackets";

/**
 * Options for replacing tags using angle brackets (`<<` `>>`).
 * Matches tags of the form `<<variable>>` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello <<variable>>';
 * const result = replaceTags(text, { variable: 'world' }, Chevrons);
 * console.log(result); // Output: 'Hello world'
 */
const Chevrons = {
  ...AngleBrackets,
  name: "Chevrons",
};

export default Chevrons;
