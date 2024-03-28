import MissingPathCallback from "./MissingPathCallback";
import stringify from "./stringify";

/**
 * Cache for storing the results of the last successful compilation.
 */
const valueCache = new Map<string, unknown>();

/**
 * Cache for storing the results of the last successful compilation as strings.
 */
const stringCache = new Map<string, string>();

/**
 * Clears the cache.
 * @returns {void} Nothing.
 */
export const clear = (): void => {
  valueCache.clear();
  stringCache.clear();
};
/**
 * Gets a value from the cache.
 * @param {string} key - The key to retrieve from the cache.
 * @returns {unknown} The value from the cache.
 */
export const get = (key: string): unknown => valueCache.get(key);
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
export const has = (key: string): boolean => valueCache.has(key);

/**
 * Sets a value in the cache.
 * @param {string} key - The key to store the value under.
 * @param {unknown} value - The value to store in the cache.
 * @returns {void} Nothing.
 * @example
 * cache.set("Key", "Value");
 * cache.get("Key"); // "Value"
 * cache.has("Key"); // true
 * cache.set("Key", "New Value");
 * cache.get("Key"); // "New Value"
 */
export const set = (key: string, value: unknown): void => {
  valueCache.set(key, value);
};

/**
 * Gets a string from the cache.
 * @param {string} path - The path to retrieve from the cache.
 * @param {string} tag - The tag containing the path.
 * @param {MissingPathCallback} onMissingPath - A callback function to handle missing paths.
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
export const getString = (
  path: string,
  tag: string,
  onMissingPath: MissingPathCallback,
): string => {
  if (stringCache.has(path)) return stringCache.get(path) as string;
  const value = valueCache.get(path);
  const text = stringify(value, path, tag, onMissingPath);
  stringCache.set(path, text);
  return text;
};
