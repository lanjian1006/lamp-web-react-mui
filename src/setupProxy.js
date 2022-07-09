const proxy = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        '/api/base',
        proxy.createProxyMiddleware({
            target: process.env.REACT_APP_REQUEST_HOST,
            changeOrigin: true
        })
    );
};