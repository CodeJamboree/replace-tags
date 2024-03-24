import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello ::{variable}::"
const DoubleColonsWithBraces: ReplaceTagsOptions = {
  tagPattern: /\:\:\{[^\}]+\}\:\:/g,
  tagStartPattern: /^\:\:\{/,
  tagEndPattern: /\}\:\:$/,
};

export default DoubleColonsWithBraces;
