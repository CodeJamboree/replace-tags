/* eslint-env node */
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  let config = common(env, argv);

  return {
    ...config,
    mode: "production",
    devtool: "source-map",
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
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
              envName: "production",
            },
          },
        },
      ],
    },
  };
};
