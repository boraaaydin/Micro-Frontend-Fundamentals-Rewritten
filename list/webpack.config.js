const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new FederationPlugin({
        name: "remote", //this name needs to match with the entry name
        filename: 'list.js',
        exposes: [{ './listIndex': './src/index' }],
        library: { type: "var", name: "list" },
        shared:["lodash"]
    })]
}