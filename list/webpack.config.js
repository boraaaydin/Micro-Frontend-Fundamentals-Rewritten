const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    mode:'development',
    devServer:{
        port:8080
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
}