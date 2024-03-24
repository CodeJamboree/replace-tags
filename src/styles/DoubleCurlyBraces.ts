import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello {{variable}}"
const DoubleCurlyBraces: ReplaceTagsOptions = {
  tagPattern: /\{\{([^}]+)\}\}/g,
  tagStartPattern: /^\{\{/,
  tagEndPattern: /\}\}$/,
};

export default DoubleCurlyBraces;
