/**
 * Callback for missing paths.
 * @callback MissingPathCallback
 * @param {string} path - The missing path.
 * @param {string} tag - The tag that contains the missing path.
 * @returns {string} The replacement value for the missing path.
 */
interface MissingPathCallback {
  /**
   * Callback for missing paths.
   * @param {string} path - The missing path.
   * @param {string} tag - The tag that contains the missing path.
   * @returns {string} The replacement value for the missing path.
   */
  (path: string, tag: string): string;
}

export default MissingPathCallback;
