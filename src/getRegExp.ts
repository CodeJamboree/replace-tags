/**
 * Gets a regular expression, or the default expression
 * @param {RegExp} defaultExpression A default regular expression
 * @param {RegExp} [expression] An regular expression, or undefined
 * @returns {RegExp} A stateless regular expression
 */
const getRegExp = (
  defaultExpression: RegExp,
  expression?: RegExp,
): RegExp => {
  const value = expression ?? defaultExpression;
  // Return a new RegExp if lastIndex is not 0 to ensure the returned RegExp is stateless
  return value.lastIndex !== 0 ? new RegExp(value) : value;
};

export default getRegExp;
