var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        vendor: ['vue'],
        todos: './wwwroot/pages/app/todo/index.js'
    },
    output: {
        filename: "./wwwroot/pages/app/todo/[name].bundle.js"
    },
    watch: true,
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
};