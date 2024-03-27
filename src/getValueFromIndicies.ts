import appendPathIndex from "./appendPathIndex";
import getValue from "./getValue";

/**
 * This function retrieves the value from an array based on the provided indicies.
 * @param {unknown} value The value to evaluate
 * @param {string} indicies The indicies to evaluate in the form of '[0][1][2]...[n]'
 * @param {string} currentPath The current path
 * @param {string} path The full path
 * @returns {unknown} The value retrieved from the array based on the indicies.
 */
const getValueFromIndicies = (
  value: unknown,
  indicies: string,
  currentPath: string | undefined,
  path: string,
): unknown => {
  // Split the indicie values into an array of keys
  const keys: string[] = indicies.split(/[[\]]+/).filter(Boolean);
  for (const key of keys) {
    // Append the [key] to the current path
    currentPath = appendPathIndex(currentPath, key);
    // Retrieve the value associated with the key
    value = getValue(value, key, currentPath, path);
    // quit if the value is undefined
    if (value === undefined) break;
  }
  return value;
};

export default getValueFromIndicies;
