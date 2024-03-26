/**
 * Gets a regular expression, or the default expression
 * @param {RegExp | undefined} expression An regular expression, or undefined
 * @param {RegExp} defaultExpression A default regular expression
 * @returns {RegExp} A stateless regular expression
 */
const getRegExp = (
  expression: RegExp | undefined,
  defaultExpression: RegExp,
): RegExp => {
  const value = expression ?? defaultExpression;
  // Return a new RegExp if lastIndex is not 0 to ensure the returned RegExp is stateless
  return value.lastIndex !== 0 ? new RegExp(value) : value;
};

export default getRegExp;
