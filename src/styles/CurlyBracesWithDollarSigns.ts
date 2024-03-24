import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello {$variable$}"
const CurlyBracesWithDollarSigns: ReplaceTagsOptions = {
  tagPattern: /\{\$([^\$]+)\$\}/g,
  tagStartPattern: /^\{\$/,
  tagEndPattern: /\$\}$/,
};

export default CurlyBracesWithDollarSigns;
