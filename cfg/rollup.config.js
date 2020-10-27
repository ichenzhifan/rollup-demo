const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");
const json = require("rollup-plugin-json");
const { uglify } = require("rollup-plugin-uglify");

const getConfig = (env = {}) => {
  const devMode = !env.production;

  const config = {
    input: "./src/main.js",
    output: {
      file: "./dist/bundle.js",
      format: "umd",
      name: "main",
      sourcemap: devMode,
    },
    plugins: [
      commonjs(),
      json(),
      resolve(),

      // 只编译我们的源代码
      babel({
        exclude: /node_modules/,
        runtimeHelpers: false,
      }),
    ],
    external: ["lodash"],
  };

  if (!devMode) {
    config.plugins.push(uglify({
      compress: true,
      ie8: true,
      warnings: false
    }));
  }

  return config;
};

export default ({ env }) => {
  return getConfig(env);
};
