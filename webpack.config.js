let mode = "development";
if(process.env.NODE_ENV === "production"){
    mode ="production";
    console.log(mode);
}
module.exports = {
    mode: 'development',
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        }]
    },
    devtool: 'source-map',
    devServer:{
        contentBase: '/dist'
    }
}