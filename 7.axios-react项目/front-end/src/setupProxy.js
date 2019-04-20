const proxy = require("http-proxy-middleware");
// proxy 中间件的选择项
var options = {
	target: "http://127.0.0.1:3006",
	changeOrigin: false,
	pathRewrite: {
		"^/api": "/"
	}
};
// 创建代理
var myProxy = proxy(options);
module.exports = function(app) {
	app.use("/api",myProxy);
};
