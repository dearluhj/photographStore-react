const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/from8081', { //触发该代理配置
      target: 'http://localhost:8081', //请求转发
      changeOrigin: true,//控制服务器收到的请求头中Host的值
      pathRewrite: { '^/from8081': '' } //重写请求路径，
    })
  )
}