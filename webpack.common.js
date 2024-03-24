/* eslint-env node */
const path = require("path");
const packageJson = require("./package.json");
const webpack = require("webpack");
require("ts-loader");
require("webpack-cli");

module.exports = (env, argv) => {
  // load up production values

  const isProduction = argv.mode === "production";

  const dist = `./dist${isProduction ? "" : "-dev"}`;
  const jsExtension = isProduction ? ".min.js" : ".js";
  const unscopedName = packageJson.name.split("/").pop();
  const config = {
    entry: "./src/index.ts",
    output: {
      clean: true,
      asyncChunks: true,
      library: packageJson.name,
      libraryTarget: "umd",
      path: path.resolve(__dirname, dist),
      filename: `${unscopedName}${jsExtension}`,
      sourceMapFilename: "[file].map",
      chunkFilename: `[name]${jsExtension}`,
    },
    plugins: [
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(packageJson.version),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?/,
          use: "ts-loader",
          exclude: /(node_modules|\.test\.ts$)/,
        },
        {
          test: /\.js$/,
          use: "source-map-loader",
          enforce: "pre",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
  };
  return config;
};
