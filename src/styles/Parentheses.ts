import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello (variable)"
const Parentheses: ReplaceTagsOptions = {
  tagPattern: /\(([^\)]+)\)/g,
  tagStartPattern: /^\(/,
  tagEndPattern: /\)$/
};

export default Parentheses;