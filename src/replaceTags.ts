import ReplaceTagsOptions from "./ReplaceTagsOptions";
import tagReplacer from "./tagReplacer";
import getOptionsWithDefaults from "./getOptionsWithDefaults";
import * as cache from "./cache";

const expectedOptionKeys = [
  "tagPattern",
  "tagStartPattern",
  "tagEndPattern",
  "cache",
  // ignored keys:
  "name",
  "openingTag",
  "closingTag",
];

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
  if (typeof options === "object" && options !== null) {
    Object.keys(options).every((key) => {
      if (!expectedOptionKeys.includes(key)) {
        throw new Error(`Unexpected option key: ${key}`);
      }
      return true;
    });
  }

  const defaultedOptions = getOptionsWithDefaults(options);
  const pattern = defaultedOptions.tagPattern;
  const tagEdges = new RegExp(
    `${defaultedOptions.tagStartPattern.source + "\\s*"}|${"\\s*" + defaultedOptions.tagEndPattern.source}`,
    "g",
  );
  const keepCache = options?.cache ?? false;
  if (!keepCache) cache.clear();
  try {
    return text.replace(pattern, tagReplacer(values, tagEdges));
  } finally {
    if (!keepCache) cache.clear();
  }
};

export default replaceTags;
