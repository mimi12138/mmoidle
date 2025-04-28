const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://your-backend-server.com', // 你的后端地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' // 根据后端实际情况决定是否重写路径
      }
    })
  );
};
