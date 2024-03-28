import ReplaceTagsOptions from "./ReplaceTagsOptions";

interface TagStyle extends ReplaceTagsOptions {
  name: string;
  openingTag: string;
  closingTag: string;
}

export default TagStyle;
