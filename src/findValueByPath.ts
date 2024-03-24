interface KeyedObject {
  [key: string]: unknown
};

const findValueByPath = (obj: object, path: string): unknown => {
  const keys = path.split(/[.[\]]/).filter(key => key);
  let value: unknown = obj;
  for (const key of keys) {
    if (typeof value === 'object' && value !== null) {
      if(Array.isArray(value) && /\d+/.test(key)) {
        value = value[parseInt(key)];
      } else {
        value = (value as KeyedObject)[key];
      }
    } else {
      return undefined;
    }
  }
  return value;
}

export default findValueByPath;
