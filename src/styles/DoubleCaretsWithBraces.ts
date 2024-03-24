import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello ^^{variable}^^"
const DoubleCaretsWithBraces: ReplaceTagsOptions = {
  tagPattern: /\^\^\{[^\}]+\}\^\^/g,
  tagStartPattern: /^\^\^\{/,
  tagEndPattern: /\}\^\^$/,
};

export default DoubleCaretsWithBraces;
