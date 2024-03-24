import appendPath from './appendPath';
import arrayPattern from './arrayPattern';
import getArrayValue from './getArrayValue';
import getValue from './getValue';
import NextValue from './NextValue';

const findNextValue = (result: NextValue, segment: string): NextValue => {
  let {value, currentPath, fullPath} = result;
  if(value === undefined) return result;
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
    fullPath
  }
}

export default findNextValue;
