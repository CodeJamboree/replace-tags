const EMPTY = "";
/**
 * Appends an index to a path prefix.
 * @param {string | undefined} prefix - The prefix to insert before the key, or undefined if no prefix exists.
 * @param {string} key - The key to append to the prefix, often non-numeric.
 * @returns {string} The concatenated path, with the key appended to the prefix (if provided).
 */
const appendPathKey = (
  prefix: string | undefined,
  key: string,
): string => `${prefix ? `${prefix}.` : EMPTY}${key}`;

export default appendPathKey;
