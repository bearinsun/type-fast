const { DefinePlugin } = require("webpack"),
	path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin");

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production",
		plugins = [
			new MiniCssExtractPlugin({
				filename: "static/css/bundle-[hash].css"
			}),
			new HtmlPlugin({
				template: "public/index.html",
				filename: "public/index.html"
			}),
			new ScriptExtHtmlPlugin({
				defaultAttribute: "defer"
			}),
			new WebappPlugin({
				logo: "./public/favicon.png",
				prefix: "public/icons/",
				inject: true,
				favicons: {
					background: "#f5f5f5",
					theme_color: "#333333",
					display: "fullscreen",
					icons: {
						android: true,
						appleIcon: true,
						appleStartup: false,
						coast: false,
						favicons: true,
						firefox: true,
						windows: true,
						yandex: true
					}
				}
			})
		];

	isProduction && plugins.push(new CleanPlugin("dist"));

	return {
		devtool: isProduction ? "source-map" : "inline-source-map",
		entry: path.resolve("src/index.js"),
		output: {
			path: path.resolve("dist"),
			filename: "static/js/bundle-[hash].js"
		},
		resolve: {
			extensions: [".js", ".json", ".jsx"]
		},
		module: {
			rules: [
				{
					test: /.html$/,
					use: [
						{
							loader: "html-loader",
							options: {
								minimize: true
							}
						}
					]
				},
				{
					test: /.(c|sc|sa)ss$/,
					use: [
						isProduction
							? MiniCssExtractPlugin.loader
							: "style-loader",
						{
							loader: "css-loader",
							options: { minimize: "true" }
						},
						"postcss-loader",
						"sass-loader"
					]
				},
				{
					test: /\.j(s|sx)$/,
					exclude: /node_modules/,
					use: ["babel-loader"]
				}
			]
		},
		plugins: plugins
	};
};
