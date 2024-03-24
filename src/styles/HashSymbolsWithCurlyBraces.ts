import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello #{variable}#"
const HashSymbolsWithCurlyBraces: ReplaceTagsOptions = {
  tagPattern: /\#\{([^\}]+)\}\#/g,
  tagStartPattern: /^\#\{/,
  tagEndPattern: /\}\#$/,
};

export default HashSymbolsWithCurlyBraces;
