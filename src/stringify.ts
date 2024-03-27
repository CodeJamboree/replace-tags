/**
 * Convert value to string
 * @param {unknown} value The value to convert to a string.
 * @param {string} defaultValue The default value to return if the value is undefined or null.
 * @returns {string} The value as a string.
 * @example
 * stringify("Hello, World!", "default value"); // "Hello, World!"
 * stringify(42, "default value"); // "42"
 * stringify(undefined, "default value"); // "default value"
 * stringify(null, "default value"); // "default value"
 * stringify({ key: "value" }, "default value"); // '{"key":"value"}'
 * stringify([1, 2, 3], "default value"); // '[1,2,3]'
 * stringify(true, "default value"); // "true"
 * stringify(false, "default value"); // "false"
 * stringify(0, "default value"); // "0"
 * stringify("", "default value"); // ""
 */
const stringify = (value: unknown, defaultValue: string): string => {
  if (typeof value === "undefined" || value === null)
    return defaultValue;
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return String(value ?? defaultValue);
};

export default stringify;
