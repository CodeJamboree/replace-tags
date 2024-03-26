/**
 * Represents options for replacing tags.
 * @interface ReplaceTagsOptions
 */
interface ReplaceTagsOptions {
  /**
   * The regular expression pattern for matching tags.
   * @example /{{\s*?.*?\s*}}/g
   * @type {RegExp}
   */
  tagPattern: RegExp;
  /**
   * The regular expression pattern for matching the start of a tag.
   * @example /{{\s*?/g.
   * @type {RegExp}
   */
  tagStartPattern: RegExp;

  /**
   * The regular expression pattern for matching the end of a tag.
   * @example /\s*}}/g.
   * @type {RegExp}
   */
  tagEndPattern: RegExp;
}

export default ReplaceTagsOptions;
