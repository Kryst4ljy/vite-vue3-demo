const path = require("path");

module.exports = {
  alias: {
    "/@/": path.resolve(__dirname, ".", "src"),
  },
  port: 8889,
};
