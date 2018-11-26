const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        // 文件输出目录
        path: resolve('./app'),
        // 资源加载路径
        publicPath: '/app/',
        // 输出的bundle文件名
        filename: '[name].js',
        // 输出的chunk文件名
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: resolve("./app"),
        inline:true,
        publicPath: "/app",
        open: true,
        index: '/index.html'
    },
    plugins: [
        // 在每次构建前清理文件夹
        new CleanWebpackPlugin(['app'])
    ]
});
