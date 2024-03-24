import findValueByPath from "./findValueByPath";
import ReplaceTagsOptions from "./ReplaceTagsOptions";

const replaceTags = (
  text: string,
  values: object,
  options?: ReplaceTagsOptions
): string => {
  const {
    tagPattern = /\{\{([^}]+)\}\}/g,
    tagStartPattern = /^\{\{/,
    tagEndPattern = /\}\}$/
  } = options || {};

  const replaceTag = (match: string): string => {
    const path = match.replace(tagStartPattern, "").replace(tagEndPattern, "");
    const value = findValueByPath(values, path);
    return value !== undefined ? `${value}` : match;
  };

  return text.replace(tagPattern, replaceTag);
}

export default replaceTags;