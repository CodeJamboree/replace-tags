import appendPath from "./appendPath";
import appendPathIndex from "./appendPathIndex";
import arrayPattern from "./arrayPattern";
import getIndicies from "./getIndicies";
import getValue from "./getValue";

/**
 * Retrieves the value from an array based on the provided segment.
 * @param {unknown} value - The value to search within (typically an array or object).
 * @param {string} segment - The segment representing the array and index (e.g., 'array[0]').
 * @param {string | undefined} currentPath - The current path in the object hierarchy.
 * @param {string} path - The full path in the object hierarchy.
 * @returns {unknown} The value retrieved from the array based on the segment.
 * @example // Example usage
 * const value = { a: [ 'b', ['c', 'd', ['e', 'f', 'g']]] }
 * const path = 'parent.a[1][2][3].length';
 * const currentPath = 'parent';
 * const segment = 'a[1][2][3]';
 * console.log(getArrayValue(data, segment, currentPath, path));
 * // Output: "g"
 */
const getArrayValue = (
  value: unknown,
  segment: string,
  currentPath: string | undefined,
  path: string,
): unknown => {
  // Check to see if the segment begins with a key
  if (segment[0] !== "[") {
    // pull out the key
    const key = segment.substring(0, segment.indexOf("["));
    // Update the path
    currentPath = appendPath(currentPath, key);
    // Grab the value
    value = getValue(value, key, currentPath, path);
    // quit if we have nothing
    if (value === undefined) return;
  }

  return getIndicies(value, segment, currentPath, path);
};

export default getArrayValue;
