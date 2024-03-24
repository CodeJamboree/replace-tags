import appendPath from "./appendPath";
import arrayPattern from "./arrayPattern";
import getValue from "./getValue";

const getArrayValue = (
  value: unknown,
  segment: string,
  currentPath: string | undefined,
  path: string,
) => {
  const [, arrayName, arrayIndex] = segment.match(arrayPattern) ?? [];
  const namePath = appendPath(currentPath, arrayName);
  value = getValue(value, arrayName, namePath, path);
  if (value === undefined) return;
  currentPath = appendPath(currentPath, segment);
  return getValue(value, arrayIndex, currentPath, path);
};

export default getArrayValue;
