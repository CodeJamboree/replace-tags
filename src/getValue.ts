/**
 * Retrieves the value from the source based on the provided key
 * @param {unknown} source The source from which to retrieve the value.
 * @param {string|number} key The key to look up in the source object.
 * @param {string} currentPath The current path being traversed in the object hierarchy.
 * @param {string} fullPath The full path to the current key being evaluated.
 * @returns {unknown} The value retrieved from the source object.
 */
const getValue = (
  source: unknown,
  key: string,
  currentPath: string,
  fullPath: string,
): unknown => {
  // Check if source is an object
  if (typeof source === "object" && source !== null) {
    // Assign value based on whether source is an array and key is a numeric string
    const value =
      Array.isArray(source) && !isNaN(Number(key))
        ? source[Number(key)]
        : (source as Record<string, unknown>)[key];
    // If the value is a function, call it with the provided parameters
    if (typeof value === "function")
      return value.call(source, key, currentPath, fullPath);
    return value;
  }
  // Return undefined if source is not an object
  return undefined;
};

export default getValue;
