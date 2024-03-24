/* eslint-env node */
module.exports = (...args) => {
  const [,{mode}] = args;
  const env = mode === 'production' ? 'prod' : 'dev';
  return require(`./webpack.${env}.js`)(...args);
};
