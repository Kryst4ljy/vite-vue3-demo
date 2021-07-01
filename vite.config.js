const path = require("path");

module.exports = {
  plugins: ["@vue/babel-plugin-jsx"],
  alias: {
    "/@/": path.resolve(__dirname, ".", "src"),
  },
  port: 8889,
};
