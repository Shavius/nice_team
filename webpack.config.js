const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let devtool = "source-map";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	devtool = false;
}

module.exports = {
	mode: mode,
	devtool: devtool,

	entry: path.resolve(__dirname, "src", "ts/script.ts"),
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
		filename: "js/script.js",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "style/style.css",
		}),
	],

	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\/(ts|js)$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.s?css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]",
				},
			},
			{
				test: /\.(woff2?|ttf|eot|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		client: {
			overlay: true,
		},
		port: 3000,
		hot: true,
	},
};
