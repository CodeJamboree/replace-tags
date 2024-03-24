import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello [-variable-]"
const SquareBracketsWithDashes: ReplaceTagsOptions = {
  tagPattern: /\[\-([^\-]+)\-\]/g,
  tagStartPattern: /^\[\-/,
  tagEndPattern: /\-\]$/,
};

export default SquareBracketsWithDashes;
