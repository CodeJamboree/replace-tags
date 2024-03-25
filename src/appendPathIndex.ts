/**
 * Appends an index to a path prefix.
 * @param {string | undefined} prefix - The prefix to append the segment to, or undefined if no prefix exists.
 * @param {string} segment - The segment to append to the prefix, often numeric.
 * @returns {string} The concatenated path, with the segment appended to the prefix (if provided).
 */
const appendPathIndex = (prefix: string | undefined, segment: string) =>
  prefix ? `${prefix}[${segment}]` : `[${segment}]`;

export default appendPathIndex;
