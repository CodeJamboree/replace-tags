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
  // Early return if source is not an object
  if (typeof source !== "object" || source === null) {
    return undefined;
  }

  // Check if key is a numeric string once and reuse the result
  const numericKey = !isNaN(Number(key)) ? Number(key) : null;

  // Assign value based on whether source is an array and key is a numeric string
  let value;
  if (numericKey !== null && Array.isArray(source)) {
    value = source[numericKey];
  } else {
    value = (source as Record<string, unknown>)[key];
  }
  // If the value is a function, call it with the provided parameters
  if (typeof value === "function")
    return value.call(source, key, currentPath, fullPath);
  return value;
};

export default getValue;
