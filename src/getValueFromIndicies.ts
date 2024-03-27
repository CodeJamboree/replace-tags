import appendPathIndex from "./appendPathIndex";
import getValue from "./getValue";

/**
 * This function retrieves the value from an array based on the provided indicies.
 * @param value The value to evaluate
 * @param indicies The indicies to evaluate in the form of '[0][1][2]...[n]'
 * @param currentPath The current path
 * @param path The full path
 * @returns The value retrieved from the array based on the indicies.
 */
const getValueFromIndicies = (
  value: unknown,
  indices: string,
  currentPath: string | undefined,
  path: string,
) => {
  // Split the indicie values into an array of keys
  const keys: string[] = indices.split(/[\[\]]+/).filter(Boolean);
  for (const key of keys) {
    // Append the [key] to the current path
    currentPath = appendPathIndex(currentPath, key);
    // Retrieve the value associated with the key
    value = getValue(value, key, currentPath, path);
    // quit if the value is undefined, return early from the function
    if (value === undefined) return;
  }
  return value;
};

export default getValueFromIndicies;
