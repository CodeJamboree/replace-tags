import appendPath from "./appendPath";
import appendPathIndex from "./appendPathIndex";
import arrayPattern from "./arrayPattern";
import getValue from "./getValue";

/**
 * Retrieves the value from an array based on the provided segment.
 * @param {unknown} value - The value to search within (typically an array or object).
 * @param {string} segment - The segment representing the array and index (e.g., 'array[0]').
 * @param {string | undefined} currentPath - The current path in the object hierarchy.
 * @param {string} path - The full path in the object hierarchy.
 * @returns {unknown} The value retrieved from the array based on the segment.
 */
const getArrayValue = (
  value: unknown,
  segment: string,
  currentPath: string | undefined,
  path: string,
): unknown => {
  // Do we have a key name before the array index?
  if (segment[0] !== "[") {
    // pull out the key
    let key = segment.substring(0, segment.indexOf("["));
    // Update the path
    currentPath = appendPath(currentPath, key);
    // Grab the value
    value = getValue(value, key, currentPath, path);
    // quit if we have nothing
    if (value === undefined) return value;
  }
  let match;
  // Copy RegEx so nested uses can have their own engine
  const pattern = new RegExp(arrayPattern);
  // Loop through nested array indexes
  while ((match = pattern.exec(segment)) !== null) {
    // Grab the key in between
    const key = match[1];
    currentPath = appendPathIndex(currentPath, key);
    value = getValue(value, key, currentPath, path);
    if (value === undefined) {
      pattern.lastIndex = 0;
      return value;
    }
  }
  return value;
};

export default getArrayValue;
