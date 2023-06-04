const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 4000
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html"
    }),
    new FederationPlugin({
        name: "container", //this name needs to match with the entry name
        remotes: {
            list: 'list@http://localhost:8080/list.js'
        }
    })
    ]
}