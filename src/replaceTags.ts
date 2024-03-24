import DoubleCurlyBraces from "./styles/DoubleCurlyBraces";
import findValueByPath from "./findValueByPath";
import ReplaceTagsOptions from "./ReplaceTagsOptions";

const replaceTags = (
  text: string,
  values: object,
  options?: Partial<ReplaceTagsOptions>
): string => {
  if (typeof text !== 'string') return text;
  const {
    tagPattern = DoubleCurlyBraces.tagPattern,
    tagStartPattern = DoubleCurlyBraces.tagStartPattern,
    tagEndPattern = DoubleCurlyBraces.tagEndPattern
  } = options ?? DoubleCurlyBraces;

  const replaceTag = (match: string): string => {
    const path = match.replace(tagStartPattern, "").replace(tagEndPattern, "");
    const value = findValueByPath(values, path);
    return value !== undefined ? `${value}` : match;
  };

  return text.replace(tagPattern, replaceTag);
}

export default replaceTags;