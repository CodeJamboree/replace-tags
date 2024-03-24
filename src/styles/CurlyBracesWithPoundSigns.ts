import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello {#variable#}"
const CurlyBracesWithPoundSigns: ReplaceTagsOptions = {
  tagPattern: /\{\#([^\#]+)\#\}/g,
  tagStartPattern: /^\{\#/,
  tagEndPattern: /\#\}$/,
};

export default CurlyBracesWithPoundSigns;
