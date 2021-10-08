const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'), 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'mian.js'
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'src','index.html'),
            filename:'index.html'
        })
    ],
    devServer:{
        port:80,
        static: path.join(__dirname,'dist')
    }
}