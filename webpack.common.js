const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const baseExportChunks = ['manifest', 'vendor'];

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: {
        vendor: ["@babel/polyfill",'vue', 'vuex', 'vue-router', 'axios', 'lodash'],
        'app': '@/main.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': resolve('src'),
            '@assets': resolve('src/assets'),
            '@libLess': resolve('src/lib-less'),
            '@service': resolve('src/service'),
            '@comps': resolve('src/components'),
            '@libComps': resolve('src/lib-components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': 'vue-style-loader!css-loader!postcss-loader!less-loader'
                    },
                    postcss: [require('autoprefixer')()],
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|TTF|png|jpg)(\?\S*)?$/,
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
            },
            {
                test: /\.css$/,
                use: ["style-loader", "postcss-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "postcss-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
            qs: 'querystring'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),

        new HtmlWebpackPlugin({
            title: 'Agent',
            filename: 'index.html',
            template: 'src/page-templates/index.handlebars',
            showErrors: true,
            inject: false,
            chunks: baseExportChunks.concat(['app'])
        })
    ]
};
