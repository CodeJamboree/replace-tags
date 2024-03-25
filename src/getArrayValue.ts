import appendPath from "./appendPath";
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
  const [, arrayName, arrayIndex] = segment.match(arrayPattern) ?? [];
  const namePath = appendPath(currentPath, arrayName);
  value = getValue(value, arrayName, namePath, path);
  if (value === undefined) return;
  currentPath = appendPath(currentPath, segment);
  return getValue(value, arrayIndex, currentPath, path);
};

export default getArrayValue;
