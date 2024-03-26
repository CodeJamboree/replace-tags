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
  // return stateless regluar expression
  return value.lastIndex !== 0 ? new RegExp(value) : value;
};

export default getRegExp;
