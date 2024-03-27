import ReplaceTagsOptions from "../ReplaceTagsOptions";
import TagStyle from "./TagStyle";

/**
 * Options for replacing tags using hash symbols and curly braces (`#{` `}#`).
 * Matches tags of the form `#{variable}#` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello #{variable}#';
 * const result = replaceTags(text, { variable: 'world' }, HashSymbolsWithCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const HashSymbolsWithCurlyBraces: TagStyle = {
  name: "Hash Symbols With Curly Braces",
  openingTag: "#{",
  closingTag: "}#",
  tagPattern: /#\{([^}]+)\}#/g,
  tagStartPattern: /^#\{/,
  tagEndPattern: /\}#$/,
};

export default HashSymbolsWithCurlyBraces;
