import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using hand emojis pointing in at the variable (`👉` `👈`).
 * Matches tags of the form `👉variable👈` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello 👉variable👈';
 * const result = replaceTags(text, { variable: 'world' }, Pointy);
 * console.log(result); // Output: 'Hello world'
 */
const Pointy: ReplaceTagsOptions = {
  tagPattern: /👉([^👈]+)👈/gu,
  tagStartPattern: /^👉/u,
  tagEndPattern: /👈$/u,
};

export default Pointy;
