import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello __variable__"
const DoubleUnderscores: ReplaceTagsOptions = {
  tagPattern: /__[^_]+__/g,
  tagStartPattern: /^__/,
  tagEndPattern: /__$/
};

export default DoubleUnderscores;