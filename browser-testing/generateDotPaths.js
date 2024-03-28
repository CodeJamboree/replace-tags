function generateDotPaths(count, maxDepth = 10) {
  const dotPaths = [];

  function generateDotPath(currentDepth, path, targetDepth) {
    if (currentDepth === targetDepth) {
      dotPaths.push(path);
      return;
    }

    if (Math.random() < 0.5) {
      // Add object dot path
      const key = `key${1 + Math.floor(Math.random() * count)}`;
      generateDotPath(
        currentDepth + 1,
        path ? `${path}.${key}` : key,
        targetDepth,
      );
    } else {
      // Add array dot path
      generateDotPath(
        currentDepth + 1,
        path
          ? `${path}[${Math.floor(Math.random() * count)}]`
          : `[${Math.floor(Math.random() * count)}]`,
        targetDepth,
      );
    }
  }

  for (let i = 0; i < count; i++) {
    generateDotPath(0, "", 1 + Math.floor(Math.random() * maxDepth));
  }

  return dotPaths;
}
