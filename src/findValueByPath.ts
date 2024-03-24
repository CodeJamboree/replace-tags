import findNextValue from "./findNextValue";
import NextValue from "./NextValue";

const findValueByPath = (obj: object, path: string): unknown =>
  path.split('.').reduce<NextValue>(findNextValue, {
    fullPath: path,
    currentPath: undefined,
    value: obj
  }).value;

export default findValueByPath;
