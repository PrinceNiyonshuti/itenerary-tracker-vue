/** @format */

module.exports = {
	devServer: {
		proxy: {
			"^/api": {
				target: "http://127.0.0.1:8000/api",
				changeOrigin: true,
				logLevel: "debug",
				pathRewrite: { "^/api": "/" },
			},
		},
	},
};
