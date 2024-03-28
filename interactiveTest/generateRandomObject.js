function generateRandomObject(depth = 3, maxLength = 10) {
  const types = ["integer", "float", "string", "boolean", "date"];
  const getRandomType = () =>
    types[Math.floor(Math.random() * types.length)];

  const generateRandomValue = (type) => {
    switch (type) {
      case "integer":
        return Math.floor(Math.random() * 100);
      case "float":
        return Math.random() * 100;
      case "string":
        return Math.random().toString(36).substring(7);
      case "boolean":
        return Math.random() < 0.5;
      case "date":
        return new Date(
          Date.now() - Math.random() * 10 * 365 * 24 * 60 * 60 * 1000,
        );
      // case 'null':
      //   return null;
      default:
        return null;
    }
  };

  const generateRandomArray = () => {
    const length = Math.floor(Math.random() * maxLength) + 1;
    return Array.from({ length }, () =>
      generateRandomValue(getRandomType()),
    );
  };

  const generateRandomObjectRecursive = (currentDepth) => {
    if (currentDepth >= depth) {
      return generateRandomValue(getRandomType());
    }
    const obj = {};
    const keys = Array.from(
      { length: Math.floor(Math.random() * maxLength) + 1 },
      (_, i) => `key_${i}`,
    );
    keys.forEach((key) => {
      obj[key] =
        Math.random() < 0.5
          ? generateRandomObjectRecursive(currentDepth + 1)
          : generateRandomArray();
    });
    return obj;
  };

  return generateRandomObjectRecursive(0);
}
