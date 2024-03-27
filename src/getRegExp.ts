/**
 * Gets a regular expression, or a new stateless regular expression if the input is stateful.
 * @param {RegExp} [expression] An regular expression
 * @returns {RegExp} A stateless regular expression
 */
const getRegExp = (expression: RegExp): RegExp => {
  // Return a new RegExp if lastIndex is not 0 to ensure the returned RegExp is stateless
  return expression.lastIndex !== 0
    ? new RegExp(expression)
    : expression;
};

export default getRegExp;
