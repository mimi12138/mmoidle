const path = require('path');
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.alias = {
          ...webpackConfig.resolve.alias,
          "@": path.resolve(__dirname, "src"), // 对应你的 src 目录
        };
        return webpackConfig;
      },
    },
  };