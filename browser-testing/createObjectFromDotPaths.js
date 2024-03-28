function createObjectFromDotPaths(dotPaths) {
  let result = {};

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

  result = convertNumericObjectsToArray(result);
  fillEmptyObjectsWithRandomStrings(result);

  return result;
}

function fillEmptyObjectsWithRandomStrings(obj) {
  for (const key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      Object.keys(obj[key]).length === 0
    ) {
      obj[key] = generateRandomString();
    } else if (typeof obj[key] === "object") {
      fillEmptyObjectsWithRandomStrings(obj[key]); // Recursively traverse nested objects
    }
  }
}

function generateRandomString() {
  return Math.random().toString(36).substring(7); // Generate random string
}
function isAlmostArrayLike(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var keys = Object.keys(obj);
  if (keys.length === 0) return false;
  return keys.every((key) => /^\d+$/.test(key));
}
function getMax(a, b) {
  return Math.max(a, b);
}

function convertNumericObjectsToArray(obj) {
  // Check if the input is an object
  if (typeof obj !== "object" || obj === null) return obj;
  const keys = Object.keys(obj);
  if (keys.length === 0) return obj;

  if (!isAlmostArrayLike(obj)) {
    // Recursively call the function for nested objects
    keys.forEach(
      (key) => (obj[key] = convertNumericObjectsToArray(obj[key])),
    );
    return obj;
  }
  var numericKeys = keys.map(Number);
  const maxKey = numericKeys.reduce(getMax, 0);
  const array = Array.from({ length: maxKey + 1 }).fill(null);
  numericKeys.forEach((num, i) => {
    array[num] = convertNumericObjectsToArray(obj[keys[i]]);
  });
  return array;
}
