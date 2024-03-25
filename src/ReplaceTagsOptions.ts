/**
 * Represents options for replacing tags.
 * @interface ReplaceTagsOptions
 */
interface ReplaceTagsOptions {
  /**
   * The regular expression pattern for matching tags.
   * @type {RegExp}
   */
  tagPattern: RegExp;
  /**
   * The regular expression pattern for matching the start of a tag.
   * @type {RegExp}
   */
  tagStartPattern: RegExp;

  /**
   * The regular expression pattern for matching the end of a tag.
   * @type {RegExp}
   */
  tagEndPattern: RegExp;
}

export default ReplaceTagsOptions;
