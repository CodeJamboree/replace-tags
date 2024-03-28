function dot(path) {
  return path.length === 0 ? "" : ".";
}
function getDotPaths(obj, parentKey = "") {
  if (typeof obj !== "object" || obj === null) return [];
  if (Array.isArray(obj)) {
    const indexes = Array(obj.length)
      .fill()
      .map((_, i) => i);
    return indexes.reduce(
      (dotPaths, i) => [
        ...dotPaths,
        `${parentKey}[${i}]`,
        ...getDotPaths(obj[i], `${parentKey}[${i}]`),
      ],
      [],
    );
  }
  const keys = Object.keys(obj);
  return keys.reduce(
    (dotPaths, key) => [
      ...dotPaths,
      `${parentKey}${dot(parentKey)}${key}`,
      ...getDotPaths(obj[key], `${parentKey}${dot(parentKey)}${key}`),
    ],
    [],
  );
}
