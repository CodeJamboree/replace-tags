import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello ??variable??"
const DoubleQuestionMarks: ReplaceTagsOptions = {
  tagPattern: /\?\?[^\?]+\?\?/g,
  tagStartPattern: /^\?\?/,
  tagEndPattern: /\?\?$/
};

export default DoubleQuestionMarks;