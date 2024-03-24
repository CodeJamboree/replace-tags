import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello ${variable}"
const DollarSignWithCurlyBraces: ReplaceTagsOptions = {
  tagPattern: /\$\{([^\}]+)\}/g,
  tagStartPattern: /^\$\{/,
  tagEndPattern: /\}$/
};

export default DollarSignWithCurlyBraces;