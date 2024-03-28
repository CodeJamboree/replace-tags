import getRegExp from "./getRegExp";
import validatePatterns from "./validatePatterns";
import IgetOptionsWithDefaults from "./IgetOptionsWithDefaults";
import ReplaceTagsOptions from "./ReplaceTagsOptions";
import defaultTag from "./styles/DoubleCurlyBraces";
import defaultMissingPathHandler from "./defaultMissingPathHandler";

/**
 * Merges the provided options with default options for tag patterns.
 * @param {Partial<ReplaceTagsOptions>} [options] - Optional partial options object.
 * @returns {ReplaceTagsOptions} The merged options object with default values.
 */
const getOptionsWithDefaults: IgetOptionsWithDefaults = ({
  tagPattern = defaultTag.tagPattern,
  tagStartPattern = defaultTag.tagStartPattern,
  tagEndPattern = defaultTag.tagEndPattern,
  onMissingPath = defaultMissingPathHandler,
}: Partial<ReplaceTagsOptions> = defaultTag): ReplaceTagsOptions => {
  const options: ReplaceTagsOptions = {
    tagPattern: getRegExp(tagPattern),
    tagStartPattern: getRegExp(tagStartPattern),
    tagEndPattern: getRegExp(tagEndPattern),
    onMissingPath,
  };
  // Validate the provided patterns
  validatePatterns(options);

  return options;
};
export default getOptionsWithDefaults;
