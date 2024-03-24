import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello <%variable%>"
const AngleBracketsWithPercentSigns: ReplaceTagsOptions = {
  tagPattern: /<%([^%]+)%>/g,
  tagStartPattern: /^<%/,
  tagEndPattern: /%>$/,
};

export default AngleBracketsWithPercentSigns;
