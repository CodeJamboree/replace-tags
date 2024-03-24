import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello {{%variable%}}"
const DoubleCurlyBracesWithPercentSign: ReplaceTagsOptions = {
  tagPattern: /\{\{%([^%]+)%\}\}/g,
  tagStartPattern: /^\{\{%/,
  tagEndPattern: /%\}\}$/,
};

export default DoubleCurlyBracesWithPercentSign;
