import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello [[$variable$]]"
const DoubleSquareBracketsWithDollarSigns: ReplaceTagsOptions = {
  tagPattern: /\[\[\$([^\$]+)\$\]\]/g,
  tagStartPattern: /^\[\[\$/,
  tagEndPattern: /\$\]\]$/,
};

export default DoubleSquareBracketsWithDollarSigns;
