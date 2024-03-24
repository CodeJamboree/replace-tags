import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello [[variable]]"
const DoubleSquareBrackets: ReplaceTagsOptions = {
  tagPattern: /\[\[([^\]\]]+)\]\]/g,
  tagStartPattern: /^\[\[/,
  tagEndPattern: /\]\]$/,
};

export default DoubleSquareBrackets;
