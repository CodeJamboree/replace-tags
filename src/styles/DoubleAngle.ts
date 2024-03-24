import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello «variable»"
const DoubleAngle: ReplaceTagsOptions = {
  tagPattern: /«([^»]+)»/g,
  tagStartPattern: /^«/,
  tagEndPattern: /»$/,
};

export default DoubleAngle;
