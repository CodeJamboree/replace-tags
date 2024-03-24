import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello 👉variable👈"
const PointingHands: ReplaceTagsOptions = {
  tagPattern: /👉([^👈]+)👈/gu,
  tagStartPattern: /^👉/u,
  tagEndPattern: /👈$/u,
};

export default PointingHands;
