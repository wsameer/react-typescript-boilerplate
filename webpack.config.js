const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC = path.resolve(__dirname, "../../src");
const DIST = path.resolve(__dirname, "../../dist");
const ENTRY = path.resolve(__dirname, "../../src/index");
const STATIC = path.resolve(__dirname, "../../public/static");
const INDEX_HTML = path.resolve(__dirname, "../../public/index.html");

module.exports = {
    entry: [ENTRY],
    output: {
        path: DIST,
        filename: "[name].[hash].js",
        chunkFilename: "[name].[hash].js",
        publicPath: "/",
    },
};
