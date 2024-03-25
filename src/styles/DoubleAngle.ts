import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using double angle brackets (`«` `»`).
 * Matches tags of the form `«variable»` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello «variable»';
 * const result = replaceTags(text, { variable: 'world' }, DoubleAngle);
 * console.log(result); // Output: 'Hello world'
 */
const DoubleAngle: ReplaceTagsOptions = {
  tagPattern: /«([^»]+)»/g,
  tagStartPattern: /^«/,
  tagEndPattern: /»$/,
};

export default DoubleAngle;
