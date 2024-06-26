const EMPTY = "";
/**
 * Appends a segment to a path prefix.
 * @param {string | undefined} prefix - The prefix to append the segment to, or undefined if no prefix exists.
 * @param {string} segment - The segment to append to the prefix.
 * @returns {string} The concatenated path, with the segment appended to the prefix (if provided).
 */
const appendPath = (
  prefix: string | undefined,
  segment: string,
): string => `${prefix ?? EMPTY}${segment}`;

export default appendPath;
