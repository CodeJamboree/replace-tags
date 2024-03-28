import MissingPathCallback from "./MissingPathCallback";
import TagPattern from "./TagPattern";
/**
 * Represents options for replacing tags.
 * @interface ReplaceTagsOptions
 */
interface ReplaceTagsOptions extends TagPattern {
  /**
   * Whether to cache resolved values.
   * @type {boolean}
   */
  cache?: boolean;

  /**
   * A callback function to handle missing tags.
   * @type {MissingPathCallback}
   */
  onMissingPath: MissingPathCallback;
}

export default ReplaceTagsOptions;
