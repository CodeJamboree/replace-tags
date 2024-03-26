import ReplaceTagsOptions from "./ReplaceTagsOptions";
import defaultTag from "./styles/DoubleCurlyBraces";

interface IgetOptionsWithDefaults {
  (
    options: Partial<ReplaceTagsOptions> | undefined,
  ): ReplaceTagsOptions;
}

/**
 * Merges the provided options with default options for tag patterns.
 * @param {Partial<ReplaceTagsOptions>} [options] - Optional partial options object.
 * @returns {ReplaceTagsOptions} The merged options object with default values.
 */
const getOptionsWithDefaults: IgetOptionsWithDefaults = ({
  tagPattern,
  tagStartPattern,
  tagEndPattern,
} = defaultTag): ReplaceTagsOptions => ({
  tagPattern: getRegExp(tagPattern, defaultTag.tagPattern),
  tagStartPattern: getRegExp(
    tagStartPattern,
    defaultTag.tagStartPattern,
  ),
  tagEndPattern: getRegExp(tagEndPattern, defaultTag.tagEndPattern),
});

const getRegExp = (
  expression: RegExp | undefined,
  defaultExpression: RegExp,
): RegExp => {
  const value = expression ?? defaultExpression;
  // return copy of expressions with state
  return value.lastIndex !== 0 ? new RegExp(value) : value;
};

export default getOptionsWithDefaults;
