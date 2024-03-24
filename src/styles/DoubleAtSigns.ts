import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello @@variable@@"
const DoubleAtSigns: ReplaceTagsOptions = {
  tagPattern: /@@[^@]+@@/g,
  tagStartPattern: /^@@/,
  tagEndPattern: /@@$/
};

export default DoubleAtSigns;