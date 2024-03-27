import appendPathIndex from "./appendPathIndex";
import arrayPattern from "./arrayPattern";
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
  indicies: string,
  currentPath: string | undefined,
  path: string,
) => {
    // Copy RegEx if already in use
    const pattern =
    arrayPattern.lastIndex === 0
      ? arrayPattern
      : new RegExp(arrayPattern);

    // Loop through nested array indexes
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(indicies)) !== null) {
      // Grab the key in between the square brackets
      const key = match[1];
      // Append the [key] to the current path
      currentPath = appendPathIndex(currentPath, key);
      // Grab the value
      value = getValue(value, key, currentPath, path);
      // quit if we have nothing
      if (value === undefined) {
        // Reset the RegEx pattern
        pattern.lastIndex = 0;
        // Return undefined
        return;
      }
    }
    return value;  
}

export default getIndicies;
