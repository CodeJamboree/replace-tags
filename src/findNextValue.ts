import appendPath from "./appendPath";
import arrayPattern from "./arrayPattern";
import getArrayValue from "./getArrayValue";
import getValue from "./getValue";
import NextValue from "./NextValue";

/**
 * Finds the next value in the object based on the given segment.
 * @param {NextValue} result - The result object containing the current value, current path, and full path.
 * @param {string} segment - The segment of the path to process.
 * @returns {NextValue} The updated result object with the next value, current path, and full path.
 */
const findNextValue = (
  result: NextValue,
  segment: string,
): NextValue => {
  let { value, currentPath } = result;
  const { fullPath } = result;
  if (value === undefined) return result;
  if (arrayPattern.test(segment)) {
    value = getArrayValue(value, segment, currentPath, fullPath);
    currentPath = appendPath(currentPath, segment);
  } else {
    currentPath = appendPath(currentPath, segment);
    value = getValue(value, segment, currentPath, fullPath);
  }
  return {
    value,
    currentPath,
    fullPath,
  };
};

export default findNextValue;
