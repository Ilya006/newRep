const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
    resolve: {
      fallback: {
        buffer: require.resolve("buffer/"),
        Buffer: require.resolve("buffer/"),
        url: require.resolve("url"),
        util: require.resolve("util"),
        assert: require.resolve("assert"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  },
});
