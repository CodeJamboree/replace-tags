import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello $[variable]$"
const DollarSigns: ReplaceTagsOptions = {
  tagPattern: /\$\[([^\]]+)\]\$/g,
  tagStartPattern: /^\$\[/,
  tagEndPattern: /\]\$$/,
};

export default DollarSigns;
