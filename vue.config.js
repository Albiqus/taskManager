const {
    defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: `/taskManager/`,
    transpileDependencies: true
})