import KeyedObject from "./KeyedObject";

/**
 * Retrieves the value from the source object based on the provided key
 * @param {unknown} source The source object from which to retrieve the value.
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
  let value;
  if (typeof source === "object" && source !== null) {
    if (Array.isArray(source) && /\d+/.test(key)) {
      value = source[parseInt(key)];
    } else {
      value = (source as KeyedObject)[key];
    }
    if (typeof value === "function")
      value = value.call(source, key, currentPath, fullPath);
    return value;
  } else {
    return undefined;
  }
};

export default getValue;
