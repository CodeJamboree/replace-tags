function createObjectFromDotPaths(dotPaths) {
  const result = {};

  dotPaths.forEach((dotPath) => {
    let current = result;
    const keys = dotPath
      .split(/\.|\[|\]/)
      .filter((key) => key !== "");

    keys.forEach((key) => {
      if (/^\d+$/.test(key)) {
        current = current || [];
        current[parseInt(key)] = current[parseInt(key)] || {};
        current = current[parseInt(key)];
      } else {
        current = current || {};
        current[key] = current[key] || {};
        current = current[key];
      }
    });
  });

  fillEmptyObjectsWithRandomStrings(result);

  return result;
}

function fillEmptyObjectsWithRandomStrings(obj) {
  for (const key in obj) {
    if (
      typeof obj[key] === "object" &&
      Object.keys(obj[key]).length === 0
    ) {
      obj[key] = Math.random().toString(36).substring(7); // Generate random string
    } else if (typeof obj[key] === "object") {
      fillEmptyObjectsWithRandomStrings(obj[key]); // Recursively traverse nested objects
    }
  }
}
