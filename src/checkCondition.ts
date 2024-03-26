/**
 * Helper function to check a condition and throw an error if it is met.
 * @param {boolean} condition - The condition to check.
 * @param {string} message - The error message to throw if the condition is met.
 * @throws {Error} Throws an error if the condition is met.
 */
const checkCondition = (condition: boolean, message: string) => {
  if (condition) {
    throw new Error(message);
  }
};

export default checkCondition;
