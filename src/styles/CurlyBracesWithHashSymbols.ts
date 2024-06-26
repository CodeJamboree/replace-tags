import Tag from "../Tag";

/**
 * Options for replacing tags using curly braces with pound signs (`{#` `#}`).
 * Matches tags of the form `{#variable#}` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello {#variable#}';
 * const result = replaceTags(text, { variable: 'world' }, CurlyBracesWithHashSymbols);
 * console.log(result); // Output: 'Hello world'
 */
const CurlyBracesWithHashSymbols: Tag = {
  name: "Curly Braces With Hash Symbols",
  openingTag: "{#",
  closingTag: "#}",
  tagPattern: /\{#.*?#\}/g,
  tagStartPattern: /^\{#/,
  tagEndPattern: /#\}$/,
};

export default CurlyBracesWithHashSymbols;
