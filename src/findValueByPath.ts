import findNextValue from "./findNextValue";
import NextValue from "./NextValue";
import * as cache from "./cache";

/**
 * Finds a value in an object by the given path in dot notation.
 * @param {unknown} source - The object to search within.
 * @param {string} path - The path to the value in dot notation.
 * @returns {unknown} The value found at the given path, or undefined if not found.
 */
const findValueByPath = (source: unknown, path: string): unknown => {
  if (cache.has(path)) return cache.get(path);
  const segments = path.split(".");
  let nextValue: NextValue = {
    fullPath: path,
    currentPath: undefined,
    value: source,
  };
  for (const segment of segments) {
    nextValue = findNextValue(nextValue, segment);
    if (nextValue.value === undefined) break;
  }
  cache.set(path, nextValue.value);
  return nextValue.value;
};
export default findValueByPath;
