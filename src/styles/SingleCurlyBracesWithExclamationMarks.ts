import ReplaceTagsOptions from "../ReplaceTagsOptions";

// "Hello {!variable!}"
const SingleCurlyBracesWithExclamationMarks: ReplaceTagsOptions = {
  tagPattern: /\{!([^!]+)!\}/g,
  tagStartPattern: /^\{!/,
  tagEndPattern: /!\}$/,
};

export default SingleCurlyBracesWithExclamationMarks;
