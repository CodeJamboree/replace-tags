/**
 * Helper function to check a condition and throw an error if it is met.
 * @param {boolean} condition - The condition to check.
 * @param {string} message - The error message to throw if the condition is met.
 * @throws {Error} Throws an error if the condition is met.
 * @returns {void} Nothing.
 * @example checkCondition(1 === 1, "1 is equal to 1");
 * // Throws an error with the message "1 is equal to 1"
 */
const checkCondition = (
  condition: boolean,
  message: string,
): void => {
  if (condition) {
    throw new Error(message);
  }
};

export default checkCondition;
