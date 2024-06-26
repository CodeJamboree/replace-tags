/* eslint-env node */
const common = require("./webpack.common");

const chunkFilename = ({ chunk: { id } }) =>
  /^vendors-/.test(id) ? "vendors/[contenthash:8].js" : "[name].js";

module.exports = (env, argv) => {
  let config = common(env, argv);

  return {
    ...config,
    mode: "development",
    devtool: "cheap-module-source-map",
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: "development",
            },
          },
        },
      ],
    },
    output: {
      ...config.output,
      chunkFilename,
    },
  };
};
