import stringify from "./stringify";

/**
 * Cache for storing the results of the last successful compilation.
 */
const cache = new Map<string, unknown>();

/**
 * Cache for storing the results of the last successful compilation as strings.
 */
const stringCache = new Map<string, string>();

/**
 * Clears the cache.
 * @returns {void} Nothing.
 */
const clear = (): void => cache.clear();
/**
 * Gets a value from the cache.
 * @param {string} key - The key to retrieve from the cache.
 * @returns {unknown} The value from the cache.
 */
const get = (key: string): unknown => cache.get(key);
/**
 * Checks if the cache has a value for the given key.
 * @param {string} key - The key to check in the cache.
 * @returns {boolean} True if the cache has a value for the key, otherwise false.
 * @example
 * cache.has(""); // false
 * cache.has("Key"); // false
 * cache.set("Key", "Value");
 * cache.has("Key"); // true
 */
const has = (key: string): boolean => cache.has(key);

/**
 * Sets a value in the cache.
 * @param {string} key - The key to store the value under.
 * @param {unknown} value - The value to store in the cache.
 * @returns {unknown} The value stored in the cache.
 * @example
 * cache.set("Key", "Value"); // "Value"
 * cache.get("Key"); // "Value"
 * cache.has("Key"); // true
 * cache.set("Key", "New Value"); // "New Value"
 * cache.get("Key"); // "New Value"
 */
const set = (key: string, value: unknown): unknown => {
  cache.set(key, value);
  return value;
};

/**
 * Gets a string from the cache.
 * @param {string} key - The key to retrieve from the cache.
 * @param {string} defaultValue - The default value to return if the value is undefined or null.
 * @returns {string} The value from the cache as a string.
 * @example
 * getString("Key", "default value"); // "default value"
 * set("Key", "Value");
 * getString("Key", "default value"); // "Value"
 * set("Key", 42);
 * getString("Key", "default value"); // "42"
 * set("Key", undefined);
 * getString("Key", "default value"); // "default value"
 */
const getString = (key: string, defaultValue: string): string => {
  if (stringCache.has(key)) return stringCache.get(key) as string;
  const value = cache.get(key);
  const text = stringify(value, defaultValue);
  stringCache.set(key, text);
  return text;
};

export default {
  get,
  getString,
  has,
  set,
  clear,
};
