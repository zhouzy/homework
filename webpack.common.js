const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const baseExportChunks = ['manifest', 'vendor'];

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: {
        vendor: ['vue', 'vuex', 'vue-router', 'axios', 'lodash'],
        'app': '@/main.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.js',

            '@': resolve('src'),
            '@assets': resolve('src/assets'),

            // 公用less
            '@libLess': resolve('src/lib-less'),

            '@service': resolve('src/service'),

            //comp
            '@Comps': resolve('src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': 'vue-style-loader!css-loader!less-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|TTF|png)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000&mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=100000&mimetype=application/font-woff',
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
            qs: 'querystring'
        }),
        // vendor为公用bundle的名称
        // mainfest用来提取运行时代码，来实现vendor的缓存
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html',
            template: 'src/pages/index.handlebars',
            showErrors: true,
            inject: false,
            chunks: baseExportChunks.concat(['app'])
        })
    ]
};
