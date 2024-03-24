import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello !{variable}!"
const ExclamationMarks: ReplaceTagsOptions = {
  tagPattern: /!\{([^}]+)\}!/g,
  tagStartPattern: /^!\{/,
  tagEndPattern: /\}!$/,
};

export default ExclamationMarks;
