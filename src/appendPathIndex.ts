const EMPTY = "";
/**
 * Appends an index to a path prefix.
 * @param {string | undefined} prefix - The prefix to append the segment to, or undefined if no prefix exists.
 * @param {string} digits - The digits to append to the prefix.
 * @returns {string} The concatenated path, with the digits appended to the prefix (if provided).
 */
const appendPathIndex = (
  prefix: string | undefined,
  digits: string,
): string => `${prefix ?? EMPTY}[${digits}]`;

export default appendPathIndex;
