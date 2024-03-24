import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello [variable]"
const SquareBrackets: ReplaceTagsOptions = {
  tagPattern: /\[([^\]]+)\]/g,
  tagStartPattern: /^\[/,
  tagEndPattern: /\]$/
};

export default SquareBrackets;