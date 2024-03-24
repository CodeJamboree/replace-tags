import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello <!--variable-->"
const HTMLComments: ReplaceTagsOptions = {
  tagPattern: /\<\!--.*?--\!\>/g,
  tagStartPattern: /^\<\!--/,
  tagEndPattern: /--\!\>$/,
};

export default HTMLComments;
