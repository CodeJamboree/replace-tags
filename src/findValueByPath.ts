import findNextValue from "./findNextValue";
import NextValue from "./NextValue";

/**
 * Finds a value in an object by the given path.
 * @param {object} source - The object to search within.
 * @param {string} path - The path to the value in dot notation.
 * @returns {unknown} The value found at the given path, or undefined if not found.
 */
const findValueByPath = (source: object, path: string): unknown =>
  path.split(".").reduce<NextValue>(findNextValue, {
    fullPath: path,
    currentPath: undefined,
    value: source,
  }).value;

export default findValueByPath;
