import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello ``variable``"
const Backticks: ReplaceTagsOptions = {
  tagPattern: /``([^`]+)``/g,
  tagStartPattern: /^``/,
  tagEndPattern: /``$/
};

export default Backticks;