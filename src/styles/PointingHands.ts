import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello 👉variable👈"
const PointingHands: ReplaceTagsOptions = {
  tagPattern: /👉([^👈]+)👈/g,
  tagStartPattern: /^👉/,
  tagEndPattern: /👈$/,
};

export default PointingHands;
