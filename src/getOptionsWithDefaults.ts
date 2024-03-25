import ReplaceTagsOptions from "./ReplaceTagsOptions";
import defaultTag from "./styles/DoubleCurlyBraces";

/**
 * Merges the provided options with default options for tag patterns.
 * @param {Partial<ReplaceTagsOptions>} [options] - Optional partial options object.
 * @returns {ReplaceTagsOptions} The merged options object with default values.
 */
const getOptionsWithDefaults = (
  options?: Partial<ReplaceTagsOptions>,
): ReplaceTagsOptions => ({
  tagPattern: options?.tagPattern ?? defaultTag.tagPattern,
  tagStartPattern:
    options?.tagStartPattern ?? defaultTag.tagStartPattern,
  tagEndPattern: options?.tagEndPattern ?? defaultTag.tagEndPattern,
});

export default getOptionsWithDefaults;
