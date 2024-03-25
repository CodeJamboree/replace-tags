import ReplaceTagsOptions from "../ReplaceTagsOptions";

/**
 * Options for replacing tags using hash symbols and curly braces (`#{` `}#`).
 * Matches tags of the form `#{variable}#` in the text.
 * @example
 * // Example usage:
 * const text = 'Hello #{variable}#';
 * const result = replaceTags(text, { variable: 'world' }, HashSymbolsWithCurlyBraces);
 * console.log(result); // Output: 'Hello world'
 */
const HashSymbolsWithCurlyBraces: ReplaceTagsOptions = {
  tagPattern: /#\{([^}]+)\}#/g,
  tagStartPattern: /^#\{/,
  tagEndPattern: /\}#$/,
};

export default HashSymbolsWithCurlyBraces;
