import getRegExp from "./getRegExp";
import validatePatterns from "./validatePatterns";
import IgetOptionsWithDefaults from "./IgetOptionsWithDefaults";
import ReplaceTagsOptions from "./ReplaceTagsOptions";
import defaultTag from "./styles/DoubleCurlyBraces";

/**
 * Merges the provided options with default options for tag patterns.
 * @param {Partial<ReplaceTagsOptions>} [options] - Optional partial options object.
 * @returns {ReplaceTagsOptions} The merged options object with default values.
 */
const getOptionsWithDefaults: IgetOptionsWithDefaults = ({
  tagPattern,
  tagStartPattern,
  tagEndPattern,
}: Partial<ReplaceTagsOptions> = defaultTag): ReplaceTagsOptions => {
  const options: ReplaceTagsOptions = {
    tagPattern: getRegExp(tagPattern, defaultTag.tagPattern),
    tagStartPattern: getRegExp(
      tagStartPattern,
      defaultTag.tagStartPattern,
    ),
    tagEndPattern: getRegExp(tagEndPattern, defaultTag.tagEndPattern),
  };
  // Validate the provided patterns
  validatePatterns(options);

  return options;
};
export default getOptionsWithDefaults;
