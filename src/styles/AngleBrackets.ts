import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello <<variable>>"
const AngleBrackets: ReplaceTagsOptions = {
  tagPattern: /\<\<([^\>]+)\>\>/g,
  tagStartPattern: /^\<\</,
  tagEndPattern: /\>\>$/
};

export default AngleBrackets;