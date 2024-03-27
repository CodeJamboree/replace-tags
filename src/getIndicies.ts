import appendPathIndex from "./appendPathIndex";
import getValue from "./getValue";

/**
 * This function retrieves the value from an array based on the provided segment.
 * @param value The value to evaluate
 * @param indicies The indicies to evaluate in the form of '[0][1][2]...[n]'
 * @param currentPath The current path
 * @param path The full path
 * @returns The value retrieved from the array based on the segment.
 */
const getIndicies = (
  value: unknown,
  indices: string,
  currentPath: string | undefined,
  path: string,
) => {
  const keys = indices.split(/[\[\]]+/).filter(Boolean);
  for (const key of keys) {
    // Append the [key] to the current path
    currentPath = appendPathIndex(currentPath, key);
    // Grab the value
    value = getValue(value, key, currentPath, path);
    // quit if we have nothing
    if (value === undefined) {
      // Return undefined
      return;
    }
  }
  return value;
};

export default getIndicies;
