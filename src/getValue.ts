interface KeyedObject {
  [key: string]: unknown
};

const getValue = (source: unknown, key: string, currentPath: string, fullPath: string) => {
  let value;
  if (typeof source === 'object' && source !== null) {
    if (Array.isArray(source) && /\d+/.test(key)) {
      value = source[parseInt(key)];
    } else {
      value = (source as KeyedObject)[key];
    }
    if (typeof value === 'function') value = value(key, currentPath, fullPath);
    return value;
  } else {
    return undefined;
  }
}

export default getValue;