const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    mode:'development',
    devServer:{
        port:4000
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./public/index.html"
    })]
}