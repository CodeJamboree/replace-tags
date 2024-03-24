import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello [:variable:]"
const SquareBracketsWithColons: ReplaceTagsOptions = {
  tagPattern: /\[\:([^\:]+)\:\]/g,
  tagStartPattern: /^\[\:/,
  tagEndPattern: /\:\]$/,
};

export default SquareBracketsWithColons;
