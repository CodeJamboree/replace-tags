import ReplaceTagsOptions from "./ReplaceTagsOptions";
import tagReplacer from "./tagReplacer";
import getOptionsWithDefaults from "./getOptionsWithDefaults";
import cache from "./cache";

/**
 * Replaces tags in a text with corresponding values from an object.
 * @param {string} text - The text containing tags to be replaced.
 * @param {object | string} values - The object containing values for replacement.
 * @param {ReplaceTagsOptions} [options] - Optional configuration for tag parsing.
 * @returns {string} The text with replaced tags.
 */
const replaceTags = (
  text: string,
  values: object | string,
  options?: Partial<ReplaceTagsOptions>,
): string => {
  if (typeof text !== "string") return text;
  if (typeof values === "string") {
    values = JSON.parse(values) as object;
  }
  const defaultedOptions = getOptionsWithDefaults(options);
  const pattern = defaultedOptions.tagPattern;
  const tagEdges = new RegExp(
    `${defaultedOptions.tagStartPattern.source + "\\s*"}|${"\\s*" + defaultedOptions.tagEndPattern.source}`,
    "g",
  );
  if (!options?.cache) cache.clear();
  return text.replace(pattern, tagReplacer(values, tagEdges));
};

export default replaceTags;
