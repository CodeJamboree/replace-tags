import MissingPathCallback from "./MissingPathCallback";

/**
 * A callback function to handle missing tags.
 * @callback MissingPathCallback
 * @param {string} path - The path that was not found.
 * @param {string} tag - The tag that was not found.
 * @returns {string} The tag that was not found.
 */
const defaultMissingPathHandler: MissingPathCallback = (path, tag) =>
  tag;

export default defaultMissingPathHandler;
