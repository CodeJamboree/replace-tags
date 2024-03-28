import TagPattern from "./TagPattern";

/**
 * The interface for a tag style.
 * @interface Tag
 */
interface Tag extends TagPattern {
  /**
   * The name of the tag style.
   * @example "Double Curly Braces"
   * @type {string}
   */
  name: string;
  /**
   * The opening tag.
   * @example "{{"
   * @type {string}
   */
  openingTag: string;

  /**
   * The closing tag.
   * @example "}}"
   * @type {string}
   */
  closingTag: string;
}

export default Tag;
