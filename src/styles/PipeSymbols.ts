import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello |variable|"
const PipeSymbols: ReplaceTagsOptions = {
  tagPattern: /\|([^\|]+)\|/g,
  tagStartPattern: /^\|/,
  tagEndPattern: /\|$/,
};

export default PipeSymbols;
