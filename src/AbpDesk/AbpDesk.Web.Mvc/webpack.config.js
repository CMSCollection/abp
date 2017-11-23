module.exports = {
    entry: {
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
    }
};